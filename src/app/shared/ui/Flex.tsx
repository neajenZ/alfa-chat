import styled from 'styled-components';

interface FlexProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: string;
  flex?: string; // Для поддержки flex-grow, flex-shrink, flex-basis
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  background?: string; // Опционально для удобства
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'stretch'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  gap: ${(props) => props.gap || '0'};
  flex: ${(props) => props.flex || '0 1 auto'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  background: ${(props) => props.background || 'transparent'};
`;
