import { Button } from '../cool-ui/src/index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CoolUI/Button',
  component: Button
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    type:'primary',
    children:'Button'
  },
};

export const Secondary = {
  args: {
    type:'Secondary',
    children:'Button'
  },
};


