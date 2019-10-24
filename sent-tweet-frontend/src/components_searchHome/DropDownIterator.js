export const DropDownIterator = props => {
  return props.allTweeters.map(name => {
    console.log(name);
    return name;
  });
};
