 import {ArchivesController} from './api/components/archives/archives.controller';
 import {ArchivesLegendController} from './api/components/archives-legend/archives-legend.controller';
import StartApp from './startapp';


(() => {

    process.once('unhandledRejection', (reason, p) => {
      console.error(reason, 'Unhandled Rejection at Promise', p);
    })
    process.once('uncaughtException', err => {
      console.error(err, 'Uncaught Exception thrown');
    });


  const CoreApp = new StartApp(
    [
      new ArchivesController(),
      new ArchivesLegendController(),

    ],
    !process.env.PORT  ? 3000 : +process.env.PORT,
  );

  CoreApp.listen();
})();

