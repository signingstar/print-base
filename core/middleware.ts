import {Request, Response, Application} from 'express';

export function middleware(app:Application) {
  // app.get('/services/:typeId', rewrite('/services?type='));

  app.use('/services/:typeId', function(req:Request, res:Response, next){
    let typeId = req.params.typeId;
    var old_url = req.url;
    req.url = `/type=${typeId}`;

    console.log('foo: ' + old_url + ' -> ' + req.url);
    next();
  });
}
