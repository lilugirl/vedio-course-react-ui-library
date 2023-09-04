import { Label} from '../cool-ui/src/index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CoolUI/Label',
  component: Label
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    children:'Primary Label'
  },
};

export const Secondary = {
  args: {
    children:'Secondary Label'
  },
};


