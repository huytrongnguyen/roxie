import { Singleton } from './injectable';
import { String } from './string';
import { LocalDate } from './date';

@Singleton
export class Roxie {
  clone = obj => JSON.parse(JSON.stringify(obj)); // deep clone
  Date = config => new LocalDate(config);

  initialState = (comp, state) => {
    if (!comp || !state) { return; }
    comp.state = state;
    for (let field of Object.keys(state)) {
      comp[`set${String.capitalize(field)}`] = value => comp.setState({ [field]: value });
    }
  }
}