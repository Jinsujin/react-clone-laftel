import React from 'react';
import { Comment, List, Card, Popover, Button, Avatar } from 'antd';
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
  HeartTwoTone,
} from '@ant-design/icons';
import AniThumbnailImage from './AniThumbnailImage';

const AnimationCard = ({ animation }) => {
  return (
    <div>
      <Card
        cover={<AniThumbnailImage image={animation.thumbnailImage} />}
        actions={[<RetweetOutlined key="retweet" />]}
      >
        <Card.Meta
          avatar={<Avatar>{animation.User.nickname[0]}</Avatar>}
          title={animation.title}
          description={animation.content}
        />
      </Card>
    </div>
  );
};

export default AnimationCard;
