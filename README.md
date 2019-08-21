# Modal Challenge

### Directives:
* Create a confirmation modal for deleting items from a list.
* Clicking cancel or grey removes modal.
* Modal becomes full screen on mobile resolutions.
* Code is reusable across various elements on the same page.

### Solutions: 
* Modal begins as a hidden element and is revealed with a JQuery click event.
* 'Trigger' class acts as a toggle for the modal and is placed on the 'delete item' button, the background of the modal, and the cancel button.
⋅⋅⋅ A trigger being placed on the container of the modal obviously causes the modal to close when clicked, the workaround is that the modal has its own click event that retains the classes that make it visible instead of removing them. Likely not optimal.
* Modal and size of its contents adjusts based on a single media query at a 900px width breakpoint for the purpose of this exercise. It is full screen below 900px and displays as a window above that.
* 'Trigger' class can be placed on anything throughout a page as many times as needed.



