import { useQuery } from '@tanstack/react-query';
import { getLabels } from '../actions';
import { GithubLabel } from '../interfaces';

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, // 1 hora de fresh

    //* MIENTRAS CARGAR MUESTRA    
    // placeholderData: [
    //   {
    //     id: 739777675,
    //     node_id: 'MDU6TGFiZWw3Mzk3Nzc2NzU=',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API',
    //     name: 'Component: Component API',
    //     color: 'd4c5f9',
    //     default: false,
    //   } satisfies GithubLabel,

    //   {
    //     id: 180616330,
    //     node_id: 'MDU6TGFiZWwxODA2MTYzMzA=',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Optimizing%20Compiler',
    //     name: 'Component: Optimizing Compiler',
    //     color: 'bfdadc',
    //     default: false,
    //   } satisfies GithubLabel,
    // ],

    //* MUESTRA INFORMACION INICIAL Y PASADO EL STALETIME CAMBIA
    // initialData: [
    //   {
    //     id: 739777675,
    //     node_id: 'MDU6TGFiZWw3Mzk3Nzc2NzU=',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API',
    //     name: 'Component: Component API',
    //     color: 'd4c5f9',
    //     default: false,
    //   } satisfies GithubLabel,

    //   {
    //     id: 180616330,
    //     node_id: 'MDU6TGFiZWwxODA2MTYzMzA=',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Optimizing%20Compiler',
    //     name: 'Component: Optimizing Compiler',
    //     color: 'bfdadc',
    //     default: false,
    //   } satisfies GithubLabel,
    // ],
  });

  return {
    labelsQuery,
  };
};
