import React from 'react';
import './App.css';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';

class App extends React.Component {
  public treeviewData : Object[] =[
    { 'nodeId': 1, "name": "Favorites", "hasChild": true},
    { 'nodeId': 2,"parentNodeId": 1, "name": "Sales Reports", "nodeIcon": "pdf"  },
    { 'nodeId': 3,"parentNodeId": 1, "name": "Marketing Reports", "nodeIcon": "pdf" },
    { 'nodeId': 4,"parentNodeId": 1, "name": "Pictures", "hasChild": true},
    { 'nodeId': 5,"parentNodeId": 4, "name": "Employee 1", "nodeImage": "https://ej2.syncfusion.com/react/demos/src/images/employees/1.png" },
    { 'nodeId': 6,"parentNodeId": 4, "name": "Employee 2","nodeImage": "https://ej2.syncfusion.com/react/demos/src/images/employees/2.png" },
    { 'nodeId': 7, "name": "Mailbox", "hasChild": true, "expanded": true },
    { 'nodeId': 8,"parentNodeId": 7, "name": "Inbox",  "count": "20"},
    { 'nodeId': 9,"parentNodeId": 7,  "name": "Drafts"},
    { 'nodeId': 10,"parentNodeId": 7,  "name": "Deleted Items"},
    { 'nodeId': 11,"parentNodeId": 7, "name": "Spam", "count": "15"},
    { 'nodeId': 12,"parentNodeId": 7, "name": "Sent Items", "count": "50"}
  ];
  public datasourceFields: Object = { dataSource: this.treeviewData,  id: 'nodeId', 
  parentID: 'parentNodeId', text: 'name', hasChildren: 'hasChild',  iconCss: 'nodeIcon', 
  imageUrl: 'nodeImage'};
  public treeviewNodeTemplate(data: any): JSX.Element { 
    return(
      <div>
        <div className='text-container'>
          <span>{data.name}</span>
        </div>
        {data.count &&
          <div className='count-container'>
            <span className='e-badge e-badge-primary'>{data.count}</span>
          </div>
        }
      </div>
    )}; 
    public customClass: string = "custom-treeview";
  render() {
    return ( 
        <div className='tree-control-wrapper'>
          <TreeViewComponent fields={this.datasourceFields}
          nodeTemplate={this.treeviewNodeTemplate as any} cssClass={this.customClass}></TreeViewComponent>
        </div>
    ); 
  }
}

export default App;
