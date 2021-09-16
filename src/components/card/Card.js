import { useState, useContext, createContext } from 'react';
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Entities,
  Meta,
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
  const [featureItem, setFeatureItem] = useState(false);
  //try to change to empty obj later
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

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setFeatureItem, setFeatureOpen } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setFeatureItem(item);
        setFeatureOpen(true);
      }}
      {...restProps}>
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Card.Feature = function CardFeature({ category, children, ...restProps }) {
  const { featureOpen, setFeatureOpen, featureItem } = useContext(FeatureContext);
  return (
    featureOpen && (
      <Feature src={`/images/${category}/${featureItem.genre}/${featureItem.slug}/large.jpg`} {...restProps}>
        <FeatureContent>
          <FeatureTitle>{featureItem.title}</FeatureTitle>
          <FeatureText>{featureItem.description}</FeatureText>
          <FeatureClose onClick={() => setFeatureOpen(false)}>
            <img src='/images/icons/close.png' alt='Close' />
          </FeatureClose>

          <Group margin='30px 0' flexDirection='row' alignItems='center'>
            <Maturity rating={featureItem.maturity}>{featureItem.maturity < 12 ? 'PG' : featureItem.maturity}</Maturity>
            <FeatureText fontWeight='bold'>
              {featureItem.genre.charAt(0).toUpperCase() + featureItem.genre.slice(1)}
            </FeatureText>
          </Group>

          {children}
        </FeatureContent>
      </Feature>
    )
  );
};
