Multiple Bootstrap Modals
======================

Solving the issue of using a single modal placeholder div to drive many calls to load remote content.

When using the bootstrap modals, you may be interested in using the "remote" content feature by placing the href attribute along with data-target and data-toggle.

This works fine but you need to have different modal divs on the page and each modal has is own id to correspond with the target. Now when using the remote feature, we find it doesnt make sense to place a bunch of empty container with corresponding ids just to be loading dynamic content into them at a later time.

We looked around if a fix had been made, but two thing bothered us, first that the modal window would apear before the content had time to be loaded into it, and would show the old content from the previoulsy closed modal. Once that was fixed, we realisez we had lost the original fade in effect where the modal would slide down and apear, we could have but we did not want to recreate the effect manually.


http://kingdomcreation.github.io/MultipleBootstrapModals
