import './index.scss';
import { Button } from './button/button';
import { dataPointingGentlemen } from './data/data';
import { Gentleman } from './gentleman/gentleman';
import { Info } from './info/info';

export function App() {
  return (
    <div className="container">
      <Info></Info>
      <Button></Button>
      <Gentleman cards={dataPointingGentlemen}></Gentleman>
    </div>
  );
}
