import { Route, Routes } from "react-router";
import YourBotArmy from "../components/yourbotarmy";
import BotCard from "../components/BotCard";

function BotCollection() {
  return (
    <div className="bot-container">
      <Routes>
        <Route path="/" element={<BotCard />} />
        <Route path="/army" element={<YourBotArmy />} />
      </Routes>
    </div>
  );
}

export default BotCollection;
