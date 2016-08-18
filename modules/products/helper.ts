import { isInInnerConfig } from "../header/presenter";

const mapUrlToSection = (category: string, urlParam: string) => {
  console.log(`category:${category} | urlParam:${urlParam} | ${isInInnerConfig(category, urlParam)}`);
  if(isInInnerConfig(category, urlParam)) {
    return urlParam;
  }

  return 'heading';
}

export default mapUrlToSection;
