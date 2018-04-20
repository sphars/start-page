console.log("js loaded");

function CreateBookmarks() {
    //get the bookmark container
    var bookmarkContainer = document.getElementById("bookmarks");

    for (var i in bookmarks.categories) {
        //create the category container and set the class
        var bookmarkCategory = document.createElement('div');
        bookmarkCategory.className = 'bookmark-category';

        //create the category name element and set the class
        var bookmarkCategoryName = document.createElement('div');
        bookmarkCategoryName.className = 'category-name';

        //get and set the name of the category
        var categoryName = bookmarks.categories[i].category;
        bookmarkCategoryName.innerHTML = categoryName;

        bookmarkCategory.appendChild(bookmarkCategoryName);

        //loop through the entries and populate the category
        for (var bookmark in bookmarks.categories[i].bookmarks) {
            //create the bookmark element and set the class
            var bookmarkElement = document.createElement('div');
            bookmarkElement.className = 'bookmark';

            //create and set the link
            var bookmarkLocation = document.createElement('a');
            bookmarkLocation.setAttribute('href', bookmarks.categories[i].bookmarks[bookmark].location);

            //set the name of the bookmark
            var name = bookmarks.categories[i].bookmarks[bookmark].name;
            bookmarkLocation.innerHTML = name;

            //add the location to the bookmark
            bookmarkElement.appendChild(bookmarkLocation);

            //add the bookmark to the category
            bookmarkCategory.appendChild(bookmarkElement);
        }

        //add the category to the bookmark container
        bookmarkContainer.appendChild(bookmarkCategory);
    }

}

document.onload = CreateBookmarks();