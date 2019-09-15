import { TranslateService } from 'ter-localization';
import en from './en';

TranslateService.setConfig(require('./config'));

TranslateService.setTranslate({
  en,
});

TranslateService.setLanguage('en');

export default TranslateService;
