import { WebElement, By } from 'selenium-webdriver';
import { WebComponent } from '../lib';

export class IdeaList {
  constructor(private elements: Promise<WebElement[]>, private selector: string) {
  }

  public async want(index: number) {
    await (await this.elements)[index].findElement(By.css('div.button')).click();
  }

  public async at(index: number): Promise<WebComponent> {
    const selector = 'div.statistic div.value';
    const counter = (await this.elements)[index].findElement(By.css(selector));
    return new WebComponent(counter, selector);
  }
}
