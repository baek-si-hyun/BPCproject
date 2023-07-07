import React, { useEffect, useRef } from "react";

interface TreemapItem {
  key: string;
  data: { key: string; data: number; symbol: string; unit: string }[];
}

interface TreemapProps {
  data: TreemapItem[];
  width: number;
  height: number;
}

const Treemap: React.FC<TreemapProps> = ({ data, width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        drawTreemap(0, 0, width, height, data, context);
      }
    }
  }, [data, width, height]);

  const drawTreemap = (
    x: number,
    y: number,
    width: number,
    height: number,
    items: TreemapItem[],
    context: CanvasRenderingContext2D
  ) => {
    let totalValue = 0;
    for (const group of items) {
      totalValue += group.data.reduce((sum, item) => sum + item.data, 0);
    }

    let childX = x;
    let childY = y;
    let childWidth = width;
    let childHeight = height;

    for (const group of items) {
      const groupValue = group.data.reduce((sum, item) => sum + item.data, 0);
      const groupRatio = groupValue / totalValue;
      const groupWidth = childWidth * groupRatio;
      const groupHeight = childHeight;

      // Draw group rectangle
      context.beginPath();
      context.rect(childX, childY, groupWidth, groupHeight);
      context.fillStyle = "#E0E0E0";
      context.fill();
      context.strokeStyle = "#000000";
      context.lineWidth = 1;
      context.stroke();

      // Draw group label
      context.fillStyle = "#000000";
      context.font = "12px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(
        group.key,
        childX + groupWidth / 2,
        childY + groupHeight / 2
      );

      let cumulativeValue = 0;
      let itemX = childX;
      let itemY = childY;
      let itemWidth = groupWidth;
      let itemHeight = groupHeight;

      for (const item of group.data) {
        const itemRatio = item.data / groupValue;
        const itemArea = itemWidth * itemHeight;

        if (itemWidth >= itemHeight) {
          itemHeight = itemArea / (itemWidth * itemRatio);
        } else {
          itemWidth = itemArea / (itemHeight * itemRatio);
        }

        // Draw item rectangle
        context.beginPath();
        context.rect(itemX, itemY, itemWidth, itemHeight);
        context.fillStyle = getRandomColor();
        context.fill();
        context.strokeStyle = "#000000";
        context.lineWidth = 1;
        context.stroke();

        // Draw item label
        context.fillStyle = "#000000";
        context.font = "10px Arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(
          `${item.key} (${item.symbol}/${item.unit})`,
          itemX + itemWidth / 2,
          itemY + itemHeight / 2
        );
        cumulativeValue += item.data;
        if (itemWidth >= itemHeight) {
          itemX += itemWidth;
          itemWidth = groupWidth - (itemX - childX);
        } else {
          itemY += itemHeight;
          itemHeight = groupHeight - (itemY - childY);
        }
      }
    }
  };

  const getRandomColor = (): string => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default Treemap;
