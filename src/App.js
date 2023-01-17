import DefaultLayout from "containers/DefaultLayout";
import DesignPage from "pages/DesignPage";
import DevelopmentPage from "pages/DevelopmentPage";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

// ====|Design|====
import DesignIntroduction from "containers/Design/Introduction";
import DesignValues from "containers/Design/DesignValues";
import DesignColors from "containers/Design/Colors";
import DesignLayout from "containers/Design/Layout";
import DesignFont from "containers/Design/Font";
import DesignIcons from "containers/Design/Icons";
import DesignDarkMode from "containers/Design/DarkMode";
import DesignOverview from "containers/Design/Overview";
import DesignFeedback from "containers/Design/Feedback";
import DesignNavigation from "containers/Design/Navigation";
import DesignDataEntry from "containers/Design/DataEntry";
import DesignDataDisplay from "containers/Design/DataDisplay";
import DesignCopywriting from "containers/Design/Copywriting";
import DesignDataFormat from "containers/Design/DataFormat";
import DesignButtons from "containers/Design/Buttons";
import DesignVisualizationPage from "containers/Design/VisualizationPage";
import DesignDetailPage from "containers/Design/DetailPage";
import DesignProximity from "containers/Design/Proximity";
import DesignAlignment from "containers/Design/Alignment";
import DesignContrast from "containers/Design/Contrast";
import DesignRepetition from "containers/Design/Repetition";
import DesignMakeItDirect from "containers/Design/MakeItDirect";
import DesignStayOnThePage from "containers/Design/StayOnThePage";
import DesignKeepItLightweight from "containers/Design/KeepItLightweight";
import DesignProvideAnInvitation from "containers/Design/ProvideAnInvitation";
import DesignUseTransition from "containers/Design/UseTransition";
import DesignReactImmediately from "containers/Design/ReactImmediately";
import DesignVisualization from "containers/Design/Visualization";
import DesignMotion from "containers/Design/Motion";
import DesignIllustration from "containers/Design/Illustration";
// ================

// ====|Development|====
import ReactIntroduction from "containers/Development/Introduce";
import ReactGettingStarted from "containers/Development/GettingStarted";
import ReactUseCRA from "containers/Development/UseCRA";
import ReactUseTS from "containers/Development/UseTS";
import ReactCompatibleStyle from "containers/Development/CompatibleStyle";
import ReactCustomizeTheme from "containers/Development/CustomizeTheme";
import ReactUseCustom from "containers/Development/UseCustom";
import ReactMigration from "containers/Development/Migration";
import ReactInternationalization from "containers/Development/Internationalization";
// =====================

const NotFound = React.lazy(() => import("containers/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Navigate to="/spec" />} />
        <Route path="spec" element={<DesignPage />}>
          <Route index element={<Navigate to="/spec/introduce" />} />
          <Route path="introduce" element={<DesignIntroduction />} />
          <Route path="values" element={<DesignValues />} />
          <Route path="colors" element={<DesignColors />} />
          <Route path="layout" element={<DesignLayout />} />
          <Route path="font" element={<DesignFont />} />
          <Route path="icon" element={<DesignIcons />} />
          <Route path="dark" element={<DesignDarkMode />} />
          <Route path="overview" element={<DesignOverview />} />
          <Route path="feedback" element={<DesignFeedback />} />
          <Route path="navigation" element={<DesignNavigation />} />
          <Route path="data-entry" element={<DesignDataEntry />} />
          <Route path="data-display" element={<DesignDataDisplay />} />
          <Route path="copywriting" element={<DesignCopywriting />} />
          <Route path="data-format" element={<DesignDataFormat />} />
          <Route path="buttons" element={<DesignButtons />} />
          <Route
            path="visualization-page"
            element={<DesignVisualizationPage />}
          />
          <Route path="detail-page" element={<DesignDetailPage />} />
          <Route path="proximity" element={<DesignProximity />} />
          <Route path="alignment" element={<DesignAlignment />} />
          <Route path="contrast" element={<DesignContrast />} />
          <Route path="repetition" element={<DesignRepetition />} />
          <Route path="direct" element={<DesignMakeItDirect />} />
          <Route path="stay" element={<DesignStayOnThePage />} />
          <Route path="lightweight" element={<DesignKeepItLightweight />} />
          <Route path="invitation" element={<DesignProvideAnInvitation />} />
          <Route path="transition" element={<DesignUseTransition />} />
          <Route path="reaction" element={<DesignReactImmediately />} />
          <Route path="visual" element={<DesignVisualization />} />
          <Route path="motion" element={<DesignMotion />} />
          <Route path="illustration" element={<DesignIllustration />} />
        </Route>
        <Route path="react" element={<DevelopmentPage />}>
          <Route index element={<Navigate to="/react/introduce" />} />
          <Route path="introduce" element={<ReactIntroduction />} />
          <Route path="getting-started" element={<ReactGettingStarted />} />
          <Route path="use-with-create-react-app" element={<ReactUseCRA />} />
          <Route path="use-in-typescript" element={<ReactUseTS />} />
          <Route path="compatible-style" element={<ReactCompatibleStyle />} />
          <Route path="customize-theme" element={<ReactCustomizeTheme />} />
          <Route path="use-custom-date-library" element={<ReactUseCustom />} />
          <Route path="migration-v5" element={<ReactMigration />} />
          <Route path="i18n" element={<ReactInternationalization />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
