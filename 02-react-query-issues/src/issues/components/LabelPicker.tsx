import React from "react";
import { useLabels } from "../hooks";
import { LoadingSpinner } from "../shared";

export const LabelPicker: React.FC = () => {

  const { labelsQuery } = useLabels()

  if ( labelsQuery.isLoading ) return (
    <div className="flex justify-center items-center h-52">
      <LoadingSpinner />
    </div>
  )

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {
        labelsQuery.data?.map( labelQuery => (
          <span
            key={labelQuery.id}
            className="animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
            style={{ border: `1px solid #${labelQuery.color}` }}
          >
            {labelQuery.name}
          </span>
        ))
      }
    </div>
  );
};
