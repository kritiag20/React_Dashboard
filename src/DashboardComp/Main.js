import React from 'react'
import SideMenu from './SideMenu'
import TotalRevenue from './TotalRevenue';
import TodayOrder from './TodayOrder';
import ProductGraph from './ProductGraph';
import TodayVisitors from './TodayVisitors';
import LineChart from './LineChart';
import TopProducts from './TopProducts';
import RecentOrder from './RecentOrder';
import ProductStatus from './ProductStatus';


function Main() {

    return (
        <div className="wrapper">
            <div className="menu-section">
                <SideMenu />
            </div>
            
            <div className="body-section">
                <div className="graphs">
                    <div className="prod-summary">
                        <TotalRevenue />
                    </div>
                    <div className="prod-summary">
                        <TodayOrder />
                    </div>
                    <div className="prod-summary">
                        <ProductGraph />
                    </div>
                    <div className="prod-summary">
                        <TodayVisitors />
                    </div>
                </div>
                <div className="product">
                    <div className="prod">
                        <LineChart />
                    </div>
                    <div className="prod">
                        <TopProducts />
                    </div>
                </div>
                <div className="status">
                    <div className="prod">
                        <ProductStatus />
                    </div>
                    <div className="prod">
                        <RecentOrder />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main
