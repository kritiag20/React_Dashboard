import logo from './logo.svg';
import './App.css';
import LineChart from './DashboardComp/LineChart';
import RecentOrder from './DashboardComp/RecentOrder';
import TopProducts from './DashboardComp/TopProducts';
import ProductStatus from './DashboardComp/ProductStatus';
import TotalRevenue from './DashboardComp/TotalRevenue';
import TodayOrder from './DashboardComp/TodayOrder';

function App() {
  return (
    <div className="App">
      <TotalRevenue/>
      <TodayOrder/>
      {/* <ProductStatus/> */}
      {/* <RecentOrder/> */}
      {/* <div className="chart">
        <LineChart />
      </div> */}
      {/* <TopProducts/> */}
    </div>
  );
}

export default App;
