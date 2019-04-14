export const loadScript = (script: string, async: boolean = true) => {
  let tag = document.createElement("script");
  tag.src = script;
  tag.async = true;
  let firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};
