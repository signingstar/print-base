import path from "path";
import pug from "pug";
import resolve from "resolve";

const npmResolverPlugin = () => {
  return {
    resolve(filename, source, options) {
      return resolve.sync(filename, {basedir: path.dirname(source)});
    }
  };
}

const config = {
  cache: false,
  pretty: true,
  plugins: [npmResolverPlugin()]
}

const compileWrapper = (fileName, module) => {
  const fileSrc = path.join(__dirname, `../`, `${fileName}.pug`);
  return pug.compileFile(fileSrc, config);
}

export default compileWrapper;
