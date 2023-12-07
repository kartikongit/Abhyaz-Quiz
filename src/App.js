import Quiz from "./Quiz.js";
import { abhyazQuiz } from "./constants.js";

function App() {
  return <Quiz questions={abhyazQuiz.questions} />;

}

export default App;
