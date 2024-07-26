import { StarFilled } from "@ant-design/icons";
import { Space } from "antd";

export default function StarRating({ count }){
    const stars = Array.from({ length: count }, (_, index) => index);
  
    return (
      <Space size={4}>
        {stars.map((_, index) => (
          <StarFilled key={index} style={{ color: '#FFFF00', fontSize: 20 }} />
        ))}
      </Space>
    );
  };
  
  