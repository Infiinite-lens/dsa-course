import React from "react";
import TopicContent from "../sections/TopicContent";

const Sorting = () => {
  const sorting = [bubbleSort, radixSort, selectionSort];
  console.log("Working ");
  return (
    <div>
      {sorting.map((sort) => (
        <TopicContent
          introText={sort.introText}
          pseudoCode={sort.pseudoCode}
          codeSnippet={sort.codeSnippet}
          codeExplanation={sort.codeExplanation}
          table={sort.table}
        />
      ))}
    </div>
  );
};

export default Sorting;

const bubbleSort = {
  introText: (
    <p>
      Introductory Message....
      <br /> Introductory message
      .............######################################
      ######################################################
      ############################
      <br />
      ............. ######################################
      ######################################################
      ############################
      <br />
      ............. ######################################
      ######################################################
      ############################
      <br />
      ............. ######################################
      ######################################################
      ############################
    </p>
  ),
  pseudoCode: (
    <p>
      Find the smallest card. Swap it with the first card. Find the
      second-smallest card. Swap it with the second card. Find the
      third-smallest card. Swap it with the third card. Repeat finding the
      next-smallest card, and swapping it into the correct position until the
      array is sorted.
    </p>
  ),
  codeSnippet: (
    <div>
      <pre>
        <code>
          {`function bubbleSort(arr) {
                var noSwaps;
                for (var i = arr.length; i > 0; i--) {
                  noSwaps = true;
                  for (var j = 0; j < i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                      var temp = arr[j];
                      arr[j] = arr[j + 1];
                      arr[j + 1] = temp;
                      noSwaps = false;
                    }
                  }
                  if (noSwaps) break;
                }
                return arr;
              }
              
              bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);`}
        </code>
      </pre>
    </div>
  ),
  codeExplanation: (
    <p>
      Find the smallest card. Swap it with the first card. Find the
      second-smallest card. Swap it with the second card. Find the
      third-smallest card. Swap it with the third card. Repeat finding the
      next-smallest card, and swapping it into the correct position until the
      array is sorted.
    </p>
  ),
  table: (
    <table>
      <tr>
        <td>Time Complexities</td>
        <td>Space Complexities</td>
      </tr>
      <tr>
        <td>O(1)</td>
        <td>O(N)</td>
      </tr>
    </table>
  ),
};

const selectionSort = {
  introText: (
    <p>
      Introductory Message....
      <br /> Introductory message
      .............######################################
      ######################################################
      ############################
      <br />
      ............. ######################################
      ######################################################
      ############################
      <br />
      ............. ######################################
      ######################################################
      ############################
      <br />
      ............. ######################################
      ######################################################
      ############################
    </p>
  ),
  pseudoCode: (
    <p>
      Find the smallest card. Swap it with the first card. Find the
      second-smallest card. Swap it with the second card. Find the
      third-smallest card. Swap it with the third card. Repeat finding the
      next-smallest card, and swapping it into the correct position until the
      array is sorted.
    </p>
  ),
  codeSnippet: (
    <div>
      <pre>
        <code>
          {`function bubbleSort(arr) {
                var noSwaps;
                for (var i = arr.length; i > 0; i--) {
                  noSwaps = true;
                  for (var j = 0; j < i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                      var temp = arr[j];
                      arr[j] = arr[j + 1];
                      arr[j + 1] = temp;
                      noSwaps = false;
                    }
                  }
                  if (noSwaps) break;
                }
                return arr;
              }
              
              bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);`}
        </code>
      </pre>
    </div>
  ),
  codeExplanation: (
    <p>
      Find the smallest card. Swap it with the first card. Find the
      second-smallest card. Swap it with the second card. Find the
      third-smallest card. Swap it with the third card. Repeat finding the
      next-smallest card, and swapping it into the correct position until the
      array is sorted.
    </p>
  ),
  table: (
    <table>
      <tr>
        <td>Time Complexities</td>
        <td>Space Complexities</td>
      </tr>
      <tr>
        <td>O(1)</td>
        <td>O(N)</td>
      </tr>
    </table>
  ),
};

const radixSort = {
  introText: (
    <p>
      Introductory Message....
      <br /> Introductory message
      .............######################################
      ######################################################
      ############################
      <br />
      ............. ######################################
      ######################################################
      ############################
      <br />
      ............. ######################################
      ######################################################
      ############################
      <br />
      ............. ######################################
      ######################################################
      ############################
    </p>
  ),
  pseudoCode: (
    <p>
      Find the smallest card. Swap it with the first card. Find the
      second-smallest card. Swap it with the second card. Find the
      third-smallest card. Swap it with the third card. Repeat finding the
      next-smallest card, and swapping it into the correct position until the
      array is sorted.
    </p>
  ),
  codeSnippet: (
    <div>
      <pre>
        <code>
          {`function bubbleSort(arr) {
                var noSwaps;
                for (var i = arr.length; i > 0; i--) {
                  noSwaps = true;
                  for (var j = 0; j < i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                      var temp = arr[j];
                      arr[j] = arr[j + 1];
                      arr[j + 1] = temp;
                      noSwaps = false;
                    }
                  }
                  if (noSwaps) break;
                }
                return arr;
              }
              
              bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);`}
        </code>
      </pre>
    </div>
  ),
  codeExplanation: (
    <p>
      Find the smallest card. Swap it with the first card. Find the
      second-smallest card. Swap it with the second card. Find the
      third-smallest card. Swap it with the third card. Repeat finding the
      next-smallest card, and swapping it into the correct position until the
      array is sorted.
    </p>
  ),
  table: (
    <table>
      <tr>
        <td>Time Complexities</td>
        <td>Space Complexities</td>
      </tr>
      <tr>
        <td>O(1)</td>
        <td>O(N)</td>
      </tr>
    </table>
  ),
};
