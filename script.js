// // script.js
// const sidebar = document.querySelector('.sidebar');
// const content = document.querySelector('.content');
// const sidebarItems = document.querySelectorAll('.sidebar-item');

// sidebarItems.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     // Toggle the sidebar
//     sidebar.style.left = '-250px';
    
//     // Display the corresponding content (you can customize this part)
//     content.innerHTML = `You clicked on ${item.querySelector('span').textContent}`;
//   });
// });

// // Add a button or functionality to show/hide the sidebar
// const toggleButton = document.querySelector('#toggle-button');
// toggleButton.addEventListener('click', () => {
//   sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
// });

const quickLinkCards = document.querySelectorAll('.quick-link-card');
const iconContainer = document.querySelector('.rounded-circle');
quickLinkCards.forEach((item, index)=>{
  item.addEventListener('mouseover',()=>{
    const closestIcon = item.closest('.quick-link-card')
    console.log(closestIcon);
  })
})