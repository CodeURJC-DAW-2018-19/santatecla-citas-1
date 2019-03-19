import { ThemeService } from './theme.service';

export class Theme {

  constructor(private name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

}
