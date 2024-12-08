import React from 'react';

export const SearchHighlight = () => {

  const highlightlabel = (searchValue: string) => {
    const label = 'My name is Puja';
    const parts: any[] = [];
    let lastIndex = 0;

    // Loop through the label to find all occurrences of the search value
    while (lastIndex < label.length) {
      const index = label.toLowerCase().indexOf(searchValue.toLowerCase(), lastIndex);  // Start search from lastIndex

      // If no more matches are found, add the remaining part of the label
      if (index === -1) {
        parts.push(label.slice(lastIndex));
        break;
      }

      // Add the part before the match
      parts.push(label.slice(lastIndex, index)); 

      // Add the highlighted part
      parts.push(
        <span style={{ backgroundColor: 'blue' }}>
          {label.slice(index, index + searchValue.length)}
        </span>
      );

      // Update lastIndex to start after the matched text
      lastIndex = index + searchValue.length;
    }

    console.log('parts', parts);
    return parts;
  }

  return (
    <div>
      {highlightlabel('pu')} {/* You can change 'pu' to test other searches */}
    </div>
  );
}
