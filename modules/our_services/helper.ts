import { isInInnerConfig } from "../header/presenter";

const mapUrlToSection = (category: string, urlParam: string) => {
  if(isInInnerConfig(category, urlParam)) {
    return urlParam;
  }

  return 'heading';
}

export default mapUrlToSection;
