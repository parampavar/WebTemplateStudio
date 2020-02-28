import * as React from "react";
import { connect } from "react-redux";
import { IStateProps, IDispatchProps } from "./interfaces";
import {mapStateToProps, mapDispatchToProps} from "./store";
import FrameworkCard from "./FrameworkCard";
import styles from "./styles.module.css";
import { InjectedIntlProps, injectIntl } from "react-intl";
import messages from "./messages";
import { getDepencyInfo } from "../../utils/extensionService/extensionService";

type Props = IStateProps & IDispatchProps & InjectedIntlProps;

const SelectFrameworks = (props: Props) => {
  const { frontendOptions, backendOptions, intl } = props;

  React.useEffect(()=>{
    getDependencyInfoAndSetToStore();
  },[]);

  const getDependencyInfoAndSetToStore = () =>{
    const { vscode, updateDependencyInfo } = props;
    const callbackGetDepencyInfo = (event: any)=>{
      const message = event.data;
      updateDependencyInfo(message.payload);
    };
    getDepencyInfo(vscode, "node").then(callbackGetDepencyInfo);
    getDepencyInfo(vscode, "python").then(callbackGetDepencyInfo);
  }

  return (
    <div>
      <h1 className={styles.title}>{intl.formatMessage(messages.frontendTitle)}</h1>
      <div className={styles.flexContainer}>
        {frontendOptions.map((framework) => {
          return (
            <FrameworkCard key={framework.internalName} framework={framework} isFrontEnd={true}/>
          );
        })}
      </div>
      <h1 className={styles.title}>{intl.formatMessage(messages.backendTitle)}</h1>
      <div className={styles.flexContainer}>
        {backendOptions.map((framework) => {
          return (
            <FrameworkCard key={framework.internalName} framework={framework} isFrontEnd={false}/>
          );
        })}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(SelectFrameworks));