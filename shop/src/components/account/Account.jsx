import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useId, useState } from "react";
import Login from "./Login";
import Newsletter from "./Newsletter";
import Transactions from "./Transactions";
import MyAccount from "./MyAccount";
import AddressBook from "./AddressBook";
import WishList from "./WishList";
import Downloads from "./Downloads";
import RecurringPayments from "./RecurringPayments";
import OrderHistory from "./OrderHistory";
import RewardPoints from "./RewardPoints";
import AccountReturns from "./AccountReturns";
import Register from "./Register";
// Import other components similarly...

function Account() {
  const accountTabs = useId();
  const isUser = true;
  const tabs = [
    { value: "my-account", label: "My Account", comp: <MyAccount /> },
    {
      value: "address-book",
      label: "Address Book",
      comp: <AddressBook />,
    },
    { value: "wish-list", label: "Wish List", comp: <WishList /> },
    {
      value: "order-history",
      label: "Order History",
      comp: <OrderHistory />,
    },
    { value: "downloads", label: "Downloads", comp: <Downloads /> },
    {
      value: "recurring-payments",
      label: "Recurring Payments",
      comp: <RecurringPayments />,
    },
    {
      value: "reward-points",
      label: "Reward Points",
      comp: <RewardPoints />,
    },
    { value: "returns", label: "Returns", comp: <AccountReturns /> },
    {
      value: "transactions",
      label: "Transactions",
      comp: <Transactions />,
    },
    { value: "newsletter", label: "Newsletter", comp: <Newsletter /> },
  ];

  if (isUser) {
    tabs.unshift(
      { value: "login", label: "Login", comp: <Login /> },
      { value: "register", label: "Register", comp: <Register /> }
    );
  } else {
    tabs.push({ value: "logout", label: "Logout", comp: null });
  }

  const [selectedTab, setSelectedTab] = useState(tabs[0]?.value || "");

  // Find the component based on the selectedTab
  const currentTab = tabs.find((tab) => tab.value === selectedTab);

  return (
    <div className="container mx-auto my-10">
      <Tabs defaultValue={selectedTab} className="flex gap-10">
        <TabsList className="w-[350px]">
          <h3 className="px-3 mb-3 text-md font-medium text-black">Home</h3>
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              id={accountTabs}
              onClick={() => setSelectedTab(tab.value)}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={selectedTab} className="w-full">
          {currentTab?.comp || null} {/* Render the corresponding component */}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Account;
