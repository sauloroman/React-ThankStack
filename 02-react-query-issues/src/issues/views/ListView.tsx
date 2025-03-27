import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks';
import { LoadingSpinner } from '../shared';
import { State } from '../interfaces';

export const ListView = () => {

  const [selectedLabel, setSelectedLabel] = useState<string[]>([])
  const [state, setState] = useState<State>(State.All)

  const { issuesQuery } = useIssues({
    state,
    selectedLabel
  })
  
  const issues = issuesQuery.data ?? []

  const onLabelSelected = ( label: string ) => {

    if ( selectedLabel.includes(label) ) {
      setSelectedLabel( selectedLabel.filter( selectedLabel => selectedLabel !== label ) )
    } else {
      setSelectedLabel([...selectedLabel, label])
    }

  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        {
          issuesQuery.isLoading 
           ? (<LoadingSpinner />)
           : (<IssueList onStateChange={setState} issues={issues} state={state} />)
        }
        
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker onLabelSelected={onLabelSelected} selectedLabels={selectedLabel} />
      </div>
    </div>
  );
};
