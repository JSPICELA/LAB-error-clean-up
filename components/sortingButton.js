import { renderToDOM } from '../utils/sample_data/utilityFunctions';

const startSortingBtn = () => {
  const domString = '<button type="button" class="btn btn-info" id="start-sorting">Start the Sorting Ceremony!</button>';

  renderToDOM('#form-container', domString);
};

export default startSortingBtn;
