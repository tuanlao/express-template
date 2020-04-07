import app from 'app';
import config from 'config';
import logger from 'logger';
import resources from 'resources';

export default () => {
  const port = config.get('port');
  app.listen(port, () => {
    logger.info(`App listening on ${port}`);
    resources.init();
  });
};
