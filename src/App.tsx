import { FC, useEffect, useState } from 'react';
// @ts-expect-error Konami.js is js only
import Konami from 'konami';
import './App.css';
import { styled } from 'styled-components';

const HeaderContainer = styled.div.attrs({ id: 'headerContainer' })`
  margin-top: 500px;
  transition: 250ms box-shadow ease-in-out;
  overflow: visible;
  width: 100%;
  clip-path: polygon(0% 0%, 100% 0%, 100% 120%, 0% 120%);
  &.normal {
    top: 0;
    margin: 0 auto;
    position: fixed;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    height: 7em;
    box-shadow: -5px 0px 20px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(20px);
  }
`;

const Header = styled.h1`
  transition: 1s text-shadow ease-in-out, 250ms transform ease-in-out;
  transform: matrix(1.5, 0, -0.5, 1.7, 20, 20);
  text-shadow: 0px 0px 30px turquoise;
  padding: 1em;
  &.normal {
    transform: matrix(1, 0, 0, 1, 0, 0);
    text-shadow: 0px 0px 30px pink !important;
    margin-top: 10px;
    padding: 0;
  }
  &.glow {
    text-shadow: 0px 0px 17px turquoise;
  }
  &.glow.normal {
    text-shadow: 0px 0px 17px pink !important;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Subtitle = styled.h2.attrs({ id: 'subtitle' })`
  transition: 1s text-shadow ease-in-out, 250ms transform ease-in-out;
  transform: matrix(1.5, 0, -0.5, 1.7, 20, 20);
  text-shadow: 0px 0px 30px turquoise;
  font-size: 1em;
  font-weight: 300;
  letter-spacing: 2px;
  padding: 1em;
  &.normal {
    padding: 0;
    transform: matrix(1, 0, 0, 1, 0, -30);
    text-shadow: 0px 0px 30px pink !important;
  }
  &.glow {
    text-shadow: 0px 0px 17px turquoise;
  }
  &.glow.normal {
    text-shadow: 0px 0px 17px pink !important;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Text = styled.div`
  margin-top: 100px;
`;

const Content = styled.div.attrs({ id: 'content' })`
  margin-top: 500px;
  padding: 0 20px;
  font-size: 17px;
  &.normal {
    padding-top: calc(1000px + 3.2em - 1em - 0.83em + 8.2em);
    margin-top: 0;
  }
`;

const App: FC = () => {
  const [marqueeEnabled, setMarqueeEnabled] = useState(false);

  useEffect(() => {
    new Konami(() => setMarqueeEnabled(true));
    window.onscroll = () => {
      const headerContainer = window.document.getElementById('headerContainer');
      const header = window.document.getElementById('header');
      const subtitle = window.document.getElementById('subtitle');
      const content = window.document.getElementById('content');
      if (window.scrollY >= 500) {
        content?.classList.add('normal');
        header?.classList.add('normal');
        subtitle?.classList.add('normal');
        headerContainer?.classList.add('normal');
      } else {
        headerContainer?.classList.remove('normal');
        content?.classList.remove('normal');
        header?.classList.remove('normal');
        subtitle?.classList.remove('normal');
      }
    };
    const interval = setInterval(() => {
      window.document.getElementById('header')?.classList.toggle('glow');
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {marqueeEnabled && (
        /* @ts-expect-error Marquee deprecated but still works */
        <marquee bgcolor="rgba(255, 255, 125, 0.6)">Jesse's Homepage</marquee>
      )}
      <HeaderContainer>
        <Header id="header">Jesse Pitkänen</Header>
        <Subtitle>- Software Developer -</Subtitle>
      </HeaderContainer>
      <Content>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam
          assumenda numquam nulla quisquam illo quo, nisi sapiente non sit
          architecto impedit dolor, fuga sunt explicabo quis accusamus.
          Distinctio, delectus!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam
          assumenda numquam nulla quisquam illo quo, nisi sapiente non sit
          architecto impedit dolor, fuga sunt explicabo quis accusamus.
          Distinctio, delectus!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam
          assumenda numquam nulla quisquam illo quo, nisi sapiente non sit
          architecto impedit dolor, fuga sunt explicabo quis accusamus.
          Distinctio, delectus!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam
          assumenda numquam nulla quisquam illo quo, nisi sapiente non sit
          architecto impedit dolor, fuga sunt explicabo quis accusamus.
          Distinctio, delectus!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam
          assumenda numquam nulla quisquam illo quo, nisi sapiente non sit
          architecto impedit dolor, fuga sunt explicabo quis accusamus.
          Distinctio, delectus!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam
          assumenda numquam nulla quisquam illo quo, nisi sapiente non sit
          architecto impedit dolor, fuga sunt explicabo quis accusamus.
          Distinctio, delectus!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam
          assumenda numquam nulla quisquam illo quo, nisi sapiente non sit
          architecto impedit dolor, fuga sunt explicabo quis accusamus.
          Distinctio, delectus!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam
          assumenda numquam nulla quisquam illo quo, nisi sapiente non sit
          architecto impedit dolor, fuga sunt explicabo quis accusamus.
          Distinctio, delectus!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam
          assumenda numquam nulla quisquam illo quo, nisi sapiente non sit
          architecto impedit dolor, fuga sunt explicabo quis accusamus.
          Distinctio, delectus!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam
          assumenda numquam nulla quisquam illo quo, nisi sapiente non sit
          architecto impedit dolor, fuga sunt explicabo quis accusamus.
          Distinctio, delectus!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut totam
          assumenda numquam nulla quisquam illo quo, nisi sapiente non sit
          architecto impedit dolor, fuga sunt explicabo quis accusamus.
          Distinctio, delectus!
        </Text>
      </Content>
    </>
  );
};

export { App };
