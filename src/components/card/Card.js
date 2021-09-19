import { useState, useContext, createContext } from 'react';
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Entities,
  Meta,
  Circle,
  Genre,
  CircleIcon,
  Item,
  Image,
  Feature,
  FeatureContent,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
} from './card-styles';

const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [featureOpen, setFeatureOpen] = useState(false);
  const [featureItem, setFeatureItem] = useState({});
  return (
    <FeatureContext.Provider value={{ featureOpen, setFeatureOpen, featureItem, setFeatureItem }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Circle = function CardCircle({ children, ...restProps }) {
  return <Circle {...restProps}>{children}</Circle>;
};

Card.Genre = function CardGenre({ children, ...restProps }) {
  return <Genre {...restProps}>{children}</Genre>;
};

Card.Maturity = function CardMaturity({ children, ...restProps }) {
  return <Maturity {...restProps}>{children}</Maturity>;
};

Card.CircleIcon = function CardCircleIcon({ ...restProps }) {
  return <CircleIcon {...restProps} />;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setFeatureItem, setFeatureOpen } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setFeatureItem(item);
        setFeatureOpen(true);
        console.log(item);
      }}
      {...restProps}>
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Card.Feature = function CardFeature({ category, relatedData, children, ...restProps }) {
  const { featureOpen, setFeatureOpen, featureItem } = useContext(FeatureContext);
  return (
    featureOpen && (
      <Feature src={`./images/${category}/${featureItem.genre}/${featureItem.slug}/large.jpg`} {...restProps}>
        <FeatureContent>
          <FeatureTitle>{featureItem.title}</FeatureTitle>
          <FeatureText>{featureItem.description}</FeatureText>
          <FeatureClose onClick={() => setFeatureOpen(false)}>
            <img src='./images/icons/close.png' alt='Close' />
          </FeatureClose>

          <Group margin='30px 0' flexDirection='row' alignItems='center'>
            <Maturity rating={featureItem.maturity}>{featureItem.maturity < 12 ? 'PG' : featureItem.maturity}</Maturity>
            <FeatureText fontWeight='bold'>
              {featureItem.genre.charAt(0).toUpperCase() + featureItem.genre.slice(1)}
            </FeatureText>
          </Group>

          {children}
        </FeatureContent>
        {/* <Card.Entities>
          {relatedData
            .filter(item => item.title !== featureItem.title)
            .map(item => (
              <Card.Item key={item.docId} onClick={() => setFeatureItem(item)}>
                <Card.Image src={`./images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                <Card.Meta>
                  <Card.SubTitle>{item.title}</Card.SubTitle>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Meta>
              </Card.Item>
            ))}
        </Card.Entities> */}
      </Feature>
    )
  );
};
