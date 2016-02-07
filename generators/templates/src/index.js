import groupBy from 'lodash/groupBy';
import forOwn from  'lodash/forOwn';



export default function getArrOfDict(stickies) {
    let stickyGroups = [];
    let dict = groupBy(stickies, 'group');
    forOwn(dict, (value, key) => {
        stickyGroups.push({
            key: key,
            items: dict[key]
        })
    });
    return stickyGroups;
}
  
