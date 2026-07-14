/*
 * data.js
 * -----------------------------------------------------------------------
 * Single source of truth for the Help Hub's navigation and content.
 * Generated/exported by admin.html. Replace the project's data.js with
 * this file to publish your changes to the live site.
 * -----------------------------------------------------------------------
 */

const menuStructure = [
    {
        section: "Editor Functions",
        type: "tab",
        tab: "content",
        label: "✏️ Content Editing"
    },
    {
        section: "Editor Functions",
        type: "tab",
        tab: "media",
        label: "🖼 Media & Images"
    },
    {
        section: "Editor Functions",
        type: "menu-group",
        tab: "general_components",
        label: "🧩 General Components",
        submenu: [
            {
                type: "item",
                component: "new-content",
                label: "New Content Component"
            },
            {
                type: "item",
                component: "image-banner",
                label: "Enhanced Image Banner"
            },
            {
                type: "item",
                component: "icon-list",
                label: "Icon List"
            },
            {
                type: "item",
                component: "accordion",
                label: "Accordion"
            }
        ]
    },
    {
        section: "Editor Functions",
        type: "menu-group",
        tab: "careers",
        label: "💼 Careers Site Components",
        submenu: [
            {
                type: "heading",
                label: "Job Categories Page"
            },
            {
                type: "item",
                component: "why-unum",
                label: "Why Unum Component"
            },
            {
                type: "item",
                component: "roles",
                label: "Roles Component"
            },
            {
                type: "item",
                component: "testimonials",
                label: "Testimonials Component"
            },
            {
                type: "item",
                component: "news",
                label: "News Widget Component"
            },
            {
                type: "item",
                component: "video",
                label: "Video Component"
            },
            {
                type: "item",
                component: "award",
                label: "Award Callout Component"
            },
            {
                type: "item",
                component: "job-postings",
                label: "Job Postings Component"
            },
            {
                type: "heading",
                label: "Locations Page"
            },
            {
                type: "item",
                component: "intro",
                label: "Intro Component"
            },
            {
                type: "item",
                component: "local-award",
                label: "Award Callout Component"
            },
            {
                type: "item",
                component: "local-resources",
                label: "Local Resources Component"
            },
            {
                type: "item",
                component: "local-community",
                label: "Local Community Component"
            },
            {
                type: "item",
                component: "local-news",
                label: "News Widget Component"
            },
            {
                type: "item",
                component: "campus-video",
                label: "Campus Video Component"
            },
            {
                type: "item",
                component: "local-job-postings",
                label: "Job Postings Component"
            }
        ]
    },
    {
        section: "Manager Functions",
        type: "tab",
        tab: "publish",
        label: "✅ Publishing"
    },
    {
        section: "Manager Functions",
        type: "tab",
        tab: "packaging",
        label: "📦 Packaging"
    }
];

const data = [
    {
        tab: "content",
        title: "Edit Page in Experience Editor",
        body: `
            <ol>
                <li>From the main screen, click on <strong>Content Editor</strong></li>
                <li>Navigate to the page you want to edit in the content tree on the left</li>
                <li>Click the <strong>Publish</strong> tab near the top of the page</li>
                <li>Click <strong>Experience Editor</strong></li>
            </ol>
        `
    },
    {
        tab: "content",
        title: "Edit text on a page",
        body: `
            <ol>
                <li>Open Experience Editor</li>
                <li>Click directly on the text field you want to edit</li>
                <li>Make your updates using the inline toolbar</li>
                <li>Click <strong>Save</strong> then <strong>Publish</strong></li>
            </ol>
        `
    },
    {
        tab: "content",
        title: "Format rich text (bold, italic, lists)",
        body: `
            <ol>
                <li>Click the rich text field to enter edit mode</li>
                <li>Highlight the text you want to format</li>
                <li>Use the toolbar that appears: <strong>B</strong> (bold), <em>I</em> (italic), U (underline), or the list icons for bullet/numbered lists</li>
                <li>For additional options (headings, tables, special characters), click the expand icon on the right of the toolbar to open the full rich text editor</li>
                <li>Save when done</li>
            </ol>
        `
    },
    {
        tab: "content",
        title: "Undo or redo a change",
        body: `
            <ol>
                <li>While editing a field, press <strong>Ctrl+Z</strong> to undo the last change</li>
                <li>Press <strong>Ctrl+Y</strong> (or <strong>Ctrl+Shift+Z</strong>) to redo</li>
                <li>You can also use the undo/redo arrow buttons in the rich text toolbar</li>
            </ol>
            <p><strong>Note:</strong> Undo only applies within the current editing session and cannot be used after saving.</p>
        `
    },
    {
        tab: "content",
        title: "Preview a page before publishing",
        body: `
            <ol>
                <li>In the Experience Editor ribbon, click the <strong>View</strong> tab</li>
                <li>Click <strong>Preview</strong></li>
                <li>The page will open in a preview mode showing how it will appear to visitors</li>
                <li>To return to editing, close the preview tab or click <strong>Edit</strong> in the ribbon</li>
            </ol>
        `
    },
    {
        tab: "content",
        title: "Add a new hyperlink",
        body: `
            <ol>
                <li>Highlight the text you want to link</li>
                <li>For an <strong>external link</strong>, click the globe icon in the toolbar, paste the URL, and select a target window</li>
                <li>For an <strong>internal link</strong>, click the link icon and select the target item from the content tree</li>
                <li>Click <strong>Insert</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        tab: "content",
        title: "Fix a broken link",
        body: `
            <ol>
                <li>Click on the broken link text to position your cursor within it</li>
                <li>Click the link icon in the toolbar</li>
                <li>Update the URL or reselect the target item from the content tree</li>
                <li>Click <strong>Insert</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        tab: "content",
        title: "Remove a hyperlink",
        body: `
            <ol>
                <li>Click on the linked text to position your cursor within it</li>
                <li>Click the <strong>Remove Link</strong> icon (broken chain) in the toolbar</li>
                <li>The text will remain but the hyperlink will be removed</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        tab: "content",
        title: "Insert a new child page",
        body: `
            <ol>
                <li>In the Experience Editor ribbon, click the <strong>Home</strong> tab</li>
                <li>Click <strong>Insert Page</strong> (or the Insert button in the ribbon)</li>
                <li>Select an appropriate page template from the list</li>
                <li>Enter a name for the new page</li>
                <li>Click <strong>Insert</strong></li>
                <li>The new page will open in Experience Editor ready to be edited</li>
            </ol>
        `
    },
    {
        tab: "content",
        title: "Delete a page",
        body: `
            <ol>
                <li>Open <strong>Content Editor</strong></li>
                <li>Navigate to the page item in the content tree</li>
                <li>Right-click the item and select <strong>Delete</strong></li>
                <li>Confirm the deletion in the dialog</li>
                <li>Publish the parent item to reflect the removal on the live site</li>
            </ol>
            <p><strong>Warning:</strong> Deletion is permanent unless a backup or recycle bin is configured. Confirm with your team before deleting.</p>
        `
    },
    {
        tab: "media",
        title: "Update an image",
        body: `
            <ol>
                <li>Click the image in Experience Editor</li>
                <li>Select <strong>Change Media</strong> from the component toolbar</li>
                <li>Upload or choose a replacement image from the Media Library</li>
                <li>Update the alt text for accessibility</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        tab: "media",
        title: "Upload a new image to the Media Library",
        body: `
            <ol>
                <li>Open <strong>Content Editor</strong></li>
                <li>In the content tree, expand the <strong>Media Library</strong> node</li>
                <li>Navigate to or create the folder where the image should be stored</li>
                <li>Click <strong>Upload Files</strong> in the ribbon (or right-click the folder and select Upload)</li>
                <li>Select the image file(s) from your computer</li>
                <li>Fill in the <strong>Alt Text</strong> and any other required fields</li>
                <li>Click <strong>Upload</strong></li>
            </ol>
        `
    },
    {
        tab: "media",
        title: "Remove an image from a page",
        body: `
            <ol>
                <li>Click the image in Experience Editor to select it</li>
                <li>In the component toolbar that appears, click <strong>Clear</strong> or the remove (X) button</li>
                <li>If the image is inside a rich text field, click the image and press <strong>Delete</strong> on your keyboard</li>
                <li>Save</li>
            </ol>
            <p><strong>Note:</strong> This removes the image from the page only. The file remains in the Media Library.</p>
        `
    },
    {
        tab: "media",
        title: "Insert an image into a Rich Text field",
        body: `
            <ol>
                <li>Click the rich text field to enter edit mode</li>
                <li>Click the expand icon to open the <strong>full rich text editor</strong></li>
                <li>Position your cursor where you want the image</li>
                <li>Click the <strong>Insert Image</strong> icon in the editor toolbar</li>
                <li>Browse the Media Library or upload a new image</li>
                <li>Set the <strong>alt text</strong> for accessibility</li>
                <li>Click <strong>Insert</strong>, then accept and save</li>
            </ol>
        `
    },
    {
        tab: "media",
        title: "Edit image properties (alt text, dimensions)",
        body: `
            <ol>
                <li>Click the image in Experience Editor to select it</li>
                <li>Click <strong>Properties</strong> or the edit icon in the component toolbar</li>
                <li>Update the <strong>Alt Text</strong> field for accessibility compliance</li>
                <li>Adjust <strong>Width</strong> or <strong>Height</strong> if needed (maintain aspect ratio to avoid distortion)</li>
                <li>Click <strong>Accept</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        tab: "components",
        title: "Add a new component",
        body: `
            <ol>
                <li>Click HOME in the Experience Editor ribbon</li>
                <li>Under the New section, click <strong>Component</strong></li>
                <li>Click <strong>Add Here</strong> where you would like to place the new component</li>
                <li>Select a component from the list</li>
                <li>Configure the component fields in the dialog that appears</li>
                <li>Click <strong>OK</strong> and save changes</li>
            </ol>
        `
    },
    {
        tab: "components",
        title: "Move or reorder a component",
        body: `
            <ol>
                <li>Click the component to reveal the component toolbar</li>
                <li>Click the <strong>Move</strong> button to open the move dialog</li>
                <li>Click <strong>Move here</strong> on the desired placeholder or position</li>
                <li>Alternatively, use the drag handle (if available) to drag the component to a new position within the same placeholder</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        tab: "components",
        title: "Remove a component",
        body: `
            <ol>
                <li>Click on the component to reveal the component toolbar</li>
                <li>Click on the red <strong>(X)</strong> icon</li>
                <li>Confirm the removal when prompted</li>
                <li>Save</li>
            </ol>
            <p><strong>Note:</strong> Removing a component from a page does not delete its datasource item. The content item in the tree is unaffected.</p>
        `
    },
    {
        tab: "components",
        title: "Edit a component's datasource",
        body: `
            <ol>
                <li>Click on the component to reveal the component toolbar</li>
                <li>Click <strong>More</strong> then <strong>Edit Component Properties</strong></li>
                <li>In the dialog, update the <strong>Data Source</strong> field to point to a different content item, or click <strong>Edit the related item</strong> to open the current datasource for editing</li>
                <li>Save the datasource item changes</li>
                <li>Publish the page</li>
            </ol>
        `
    },
    {
        tab: "components",
        title: "Modify component options",
        body: `
            <ol>
                <li>Click on the component to reveal the component toolbar</li>
                <li>Click <strong>More</strong> then <strong>Edit Component Properties</strong></li>
                <li>Update any available options (e.g., layout, style, visibility)</li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        tab: "careers",
        title: "Careers site editing overview",
        body: `
            <ol>
                <li>Open the Careers page you need to edit in Experience Editor</li>
                <li>Review the page layout and identify which component needs to be updated</li>
                <li>Use the submenu under <strong>Careers Site Tasks</strong> to select component-specific instructions</li>
                <li>Make all content, media, link, and accessibility updates</li>
                <li>Save, preview, and publish the page when ready</li>
            </ol>
        `
    },
    {
        tab: "careers",
        title: "Careers accessibility checklist",
        body: `
            <ol>
                <li>Confirm every image has meaningful alt text, or empty alt text if decorative</li>
                <li>Make sure CTA labels are descriptive and do not rely only on text like "Click here"</li>
                <li>Verify heading levels are logical and do not skip levels unnecessarily</li>
                <li>Check that links open in the expected target window</li>
                <li>Preview the page before publishing</li>
            </ol>
        `
    },
    {
        tab: "careers",
        title: "Careers page pre-publish review",
        body: `
            <ol>
                <li>Confirm all visible content has been reviewed and approved</li>
                <li>Check that all CTAs point to the correct internal or external destination</li>
                <li>Confirm images are optimized and have completed accessibility fields</li>
                <li>Preview the page in Experience Editor</li>
                <li>Publish the page once the review is complete</li>
            </ol>
        `
    },
    {
        tab: "publish",
        title: "Publish an item",
        body: `
            <h4>In Experience Editor:</h4>
            <ol>
                <li>Click <strong>Home</strong> in the command ribbon near the top left</li>
                <li>Click <strong>Publish</strong></li>
                <li>Click the <strong>Publish</strong> button at the bottom of the dialog</li>
                <li>Click <strong>Close</strong></li>
            </ol>
            <h4>In Content Editor:</h4>
            <ol>
                <li>Navigate to the item in the content tree</li>
                <li>Right-click on the item</li>
                <li>Click <strong>Publish</strong></li>
                <li>Click the <strong>Publish</strong> button at the bottom of the dialog</li>
                <li>Click <strong>Close</strong></li>
            </ol>
        `
    },
    {
        tab: "publish",
        title: "Unpublish or restrict an item",
        body: `
            <ol>
                <li>Open <strong>Content Editor</strong> and navigate to the item</li>
                <li>Click the <strong>Publish</strong> tab in the ribbon</li>
                <li>Click <strong>Publishing Restrictions</strong></li>
                <li>Select <strong>Never publish</strong> to prevent the item from going live, or set a specific <strong>Unpublish Date</strong></li>
                <li>Click <strong>Save</strong></li>
                <li>Republish the parent page to reflect the change on the live site</li>
            </ol>
        `
    },
    {
        tab: "packaging",
        title: "Create a new package",
        body: `
            <ol>
                <li>Navigate to <strong>Sitecore Start Menu &gt; Control Panel &gt; Development Tools &gt; Package Designer</strong></li>
                <li>Click <strong>New Package</strong></li>
                <li>Enter a <strong>Package Name</strong>, author, publisher, and version</li>
                <li>Under the <strong>Items</strong> section, click <strong>Add</strong> and browse the content tree to select the items to include</li>
                <li>Add any required <strong>Files</strong> in the Files section if applicable</li>
                <li>Click <strong>Generate Package</strong></li>
                <li>Save the package to the default package folder when prompted</li>
            </ol>
        `
    },
    {
        tab: "packaging",
        title: "Export and download a package",
        body: `
            <ol>
                <li>Navigate to <strong>Control Panel &gt; Development Tools &gt; Package Designer</strong></li>
                <li>Open an existing package or create a new one</li>
                <li>Click <strong>Generate Package</strong></li>
                <li>When the generation completes, click <strong>Download</strong> to save the <code>.zip</code> package file to your computer</li>
            </ol>
        `
    },
    {
        tab: "packaging",
        title: "Install a package",
        body: `
            <ol>
                <li>Navigate to <strong>Control Panel &gt; Development Tools &gt; Installation Wizard</strong></li>
                <li>Click <strong>Upload Package</strong> and select the <code>.zip</code> package file from your computer</li>
                <li>Click <strong>Next</strong> and review the package details and contents</li>
                <li>Click <strong>Install</strong></li>
                <li>Handle any overwrite prompts (choose <strong>Overwrite</strong> or <strong>Skip</strong> as appropriate)</li>
                <li>Click <strong>Finish</strong> when the installation is complete</li>
            </ol>
            <p><strong>Note:</strong> Always install packages in a lower environment first to verify there are no conflicts.</p>
        `
    },
    {
        tab: "packaging",
        title: "View installed packages",
        body: `
            <ol>
                <li>Navigate to <strong>Control Panel &gt; Development Tools &gt; Package Designer</strong></li>
                <li>Click <strong>Open</strong> to browse the <code>/packages</code> folder on the server where installed package files are stored</li>
                <li>Previously generated or installed packages will be listed here as <code>.zip</code> files</li>
            </ol>
            <p><strong>Tip:</strong> Sitecore does not maintain a formal install history by default. Consider keeping a record of installed packages and their versions.</p>
        `
    }
];

const submenuData = [
    {
        parentTab: "careers",
        component: "why-unum",
        title: "Edit Background Color",
        body: `
            <ol>
                <li>Click on the <strong>Why Unum Component</strong> box in Experience Editor</li>
                <li>Click <strong>More</strong> then click <strong>Edit Component Properties</strong></li>
                <li>Select a color from the dropdown under <strong>Component Background Color</strong></li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "why-unum",
        title: "Update Text",
        body: `
            <ol>
                <li>Click directly on the text field you want to edit in the <strong>Why Unum</strong> component</li>
                <li>Make your updates using the inline editor</li>
                <li>Click <strong>Save</strong></li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "roles",
        title: "Update Roles Component background color",
        body: `
            <ol>
                <li>Click on the <strong>Roles Component</strong> box in Experience Editor</li>
                <li>Click <strong>More</strong> then click <strong>Edit Component Properties</strong></li>
                <li>Select a color from the dropdown under <strong>Component Background Color</strong></li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "roles",
        title: "Add a new card to the Roles card deck",
        body: `
            <ol>
                <li>Click on <strong>Configure Card Deck</strong> to open the dialogue</li>
                <li>Click the plus icon on the left side of the dialogue</li>
                <li>Select <strong>Card</strong>, type in a name for the role then click <strong>OK</strong></li>
                <li>Modify the headline and description text as needed</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "roles",
        title: "Edit an existing card in the Roles card deck",
        body: `
            <ol>
                <li>Click on the card you wish to edit</li>
                <li>Use the inline editor to make your changes</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "roles",
        title: "Sort cards in the Roles card deck",
        body: `
            <ol>
                <li>Click on <strong>Configure Card Deck</strong> to open the dialogue</li>
                <li>Click the <strong>Sort the content</strong> button</li>
                <li>Drag and drop the cards into the desired order</li>
                <li>Click <strong>OK</strong> to save the new order</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "testimonials",
        title: "Change Testimonials Component Background Color",
        body: `
            <ol>
                <li>Click on the <strong>Testimonials Component</strong> box in Experience Editor</li>
                <li>Click <strong>More</strong> then click <strong>Edit Component Properties</strong></li>
                <li>Select a color from the dropdown under <strong>Component Background Color</strong></li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "testimonials",
        title: "Add new Testimonial",
        body: `
            <ol>
                <li>Click on the <strong>Configure Slider</strong> box in Experience Editor</li>
                <li>Click the plus icon on the left side of the dialogue box</li>
                <li>Make sure <strong>Testimonial Slide</strong> is selected</li>
                <li>Type in a name for the testimonial slide and click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "testimonials",
        title: "Edit Testimonial text",
        body: `
            <ol>
                <li>Use the slider arrows to navigate to the testimonial you want to edit</li>
                <li>Click on the text you want to change</li>
                <li>Make your changes in the text editor that appears</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "testimonials",
        title: "Edit Testimonial picture",
        body: `
            <ol>
                <li>Use the slider arrows to navigate to the testimonial you want to edit</li>
                <li>Click on the picture you want to change</li>
                <li>Use the buttons to change, edit or remove the picture</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "testimonials",
        title: "Sort testimonials in the slider",
        body: `
            <ol>
                <li>Click on <strong>Configure Slider</strong> to open the dialogue</li>
                <li>Click the <strong>Sort the content</strong> button</li>
                <li>Drag and drop the testimonials into the desired order</li>
                <li>Click <strong>OK</strong> to save the new order</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "testimonials",
        title: "Delete testimonial",
        body: `
            <ol>
                <li>Click on <strong>Edit Testimonial</strong> to open the dialogue</li>
                <li>Click the <strong>Delete (X)</strong> button</li>
                <li>Click <strong>OK</strong> to confirm the deletion</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "news",
        title: "Change the News Widget Component background color",
        body: `
            <ol>
                <li>Click on the <strong>News Widget Component</strong> box in Experience Editor</li>
                <li>Click <strong>More</strong> then click <strong>Edit Component Properties</strong></li>
                <li>Select a color from the dropdown under <strong>Component Background Color</strong></li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "news",
        title: "Change which widget is displayed",
        body: `
            <ol>
                <li>Click on the <strong>News Widget Component</strong> box in Experience Editor</li>
                <li>Click <strong>More</strong> then click <strong>Edit Component Properties</strong></li>
                <li>Enter ID in the text box labeled <strong>EmbedSocial Widget ID</strong></li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
            <p><strong>Note:</strong> The widget ID is provided by the EmbedSocial platform. Contact your administrator if you need assistance.</p>
        `
    },
    {
        parentTab: "careers",
        component: "news",
        title: "Remove News Widget Component",
        body: `
            <ol>
                <li>Click on the <strong>News Widget Component</strong> box in Experience Editor</li>
                <li>Click <strong>More</strong> then click <strong>Edit Component Properties</strong></li>
                <li>Delete the ID in the text box labeled <strong>EmbedSocial Widget ID</strong></li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "video",
        title: "Add a video",
        body: `
            <ol>
                <li>Click the blue dashed box in Experience Editor under the Video Component</li>
                <li>Click <strong>Add here</strong></li>
                <li>Click <strong>Careers Video</strong> then click <strong>Select</strong></li>
                <li>Choose a video from the _Content folder or click <strong>Create New Content</strong> to add a new video to the Media Library</li>
                <li>Configure the video settings as needed</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "video",
        title: "Remove video",
        body: `
            <ol>
                <li>Click on the video</li>
                <li>Click the <strong>Remove (X)</strong> button</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "award",
        title: "Customize Award Callout Component parameters",
        body: `
            <ol>
                <li>Click on the <strong>Award Callout Component</strong> box in Experience Editor</li>
                <li>Click <strong>More</strong> then click <strong>Edit Component Properties</strong></li>
                <li>Choose your background color from the <strong>Component Background Color</strong> dropdown</li>
                <li>Choose your <strong>Media Position</strong> (left or right) from the dropdown</li>
                <li>Choose the type of <strong>Type of Award Component</strong> (Awards Slider or Single Award) from the dropdown</li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
            <p><strong>Note:</strong> The Awards Slider component allows for multiple awards to be displayed in a carousel format, while the Single Award component displays one award at a time. The Media Position dropdown only affects the Single Award component type.</p>
        `
    },
    {
        parentTab: "careers",
        component: "award",
        title: "Add a single award callout",
        body: `
            <ol>
                <li>Select <strong>Single Award</strong> from the "Type of Award Component" dropdown in the component parameters</li>
                <li>Click the image and follow standard procedures for adding an image</li>
                <li>Click the text fields and enter your content</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "award",
        title: "Add an awards slider",
        body: `
            <ol>
                <li>Select <strong>Awards Slider</strong> from the "Type of Award Component" dropdown in the component parameters</li>
                <li>Click the blue dashed placeholder box and click <strong>Add here</strong></li>
                <li>Select Awards Slider then click <strong>Select</strong></li>
                <li>Either select an Awards Slider in the "_Content" folder or create a new one by clicking <strong>Create New Content</strong>, entering a name then click <strong>OK</strong></li>
                <li>Click <strong>Save</strong></li>
                <li>Click the placeholder image and follow standard procedures for adding an image</li>
                <li>Click the text fields and enter the name of the award and a link to the award's website</li>
                <li>To add a new award, click anywhere outside of an award in the slider, then click the <strong>Insert a new item (+)</strong> button, name your award and click <strong>OK</strong></li>
                <li>Repeat previous steps to edit the image, name and link for each award you want to add to the slider</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "award",
        title: "Edit awards slider parameters",
        body: `
            <ol>
                <li>Click anywhere in the awards slider to bring up the dialogue, click <strong>More</strong> then click <strong>Edit component properties</strong></li>
                <li><strong>Slides To Show</strong> refers to how many slides are visible at once in the carousel - Enter a number between 1 and 5</li>
                <li><strong>Slides To Scroll</strong> refers to how many slides will move when the user clicks the arrow buttons - Enter a number between 1 and 5</li>
                <li><strong>Infinite</strong> refers to whether the carousel will loop back to the beginning when the user reaches the end - Check or uncheck the box</li> 
                <li><strong>Dots</strong> refers to whether the carousel will display navigation dots below the slides - Check or uncheck the box</li>
                <li><strong>Autoplay</strong> refers to whether the carousel will automatically advance through the slides - Check or uncheck the box</li>
                <li><strong>Slider Width</strong> refers to the width of the carousel - Select from the dropdown</li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "award",
        title: "Add a new award to the slider",
        body: `
            <ol>
                <li>In the <strong>Experience Editor</strong>, click anywhere in the awards slider to bring up the dialogue</li>
                <li>Click the <strong>Insert a new item (+)</strong> button</li>
                <li>Ensure Award Slide is selected, enter a name for the Award Slide item, and click <strong>OK</strong></li>
                <li>Fill in the Name of the Award, Award Logo, and Link to Award fields in the <strong>Experience Editor</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "award",
        title: "Remove award from the slider",
        body: `
            <ol>
                <li>Go to the content tree in the <strong>Content Editor</strong> and find the <strong>Awards Slider</strong> you are looking to add an award to</li>
                <li>Expand the awards slider you are editing</li>
                <li>Right click on the award you want to remove and select <strong>Delete</strong></li>
                <li>Confirm the deletion</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "job-postings",
        title: "Edit job postings component",
        body: `
            <ol>
                <li>Click <strong>Job Postings Component</strong> to bring up the dialogue, click <strong>More</strong> then click <strong>Edit component properties</strong></li>
                <li><strong>Filter</strong> refers to the keyword used to filter job postings - Enter a keyword or leave blank for all postings</li>
                <li><strong>Limit</strong> refers to the maximum number of job postings to display - Enter a number between 1-10 (3 recommended) or leave blank for default of 10</li>
                <li><strong>See All Careers Link</strong> refers to the URL for the "See All" button - Select a page from the dropdown</li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>                          
            </ol>
            <p><strong>Note:</strong> The job postings component is connected to the external job board and will automatically update with new postings. The filter option allows you to display only certain types of jobs based on keywords. Use "," for the AND operator and "|" for the OR operator</p>
        `
    },
    {
        parentTab: "careers",
        component: "intro",
        title: "Edit Background Color",
        body: `
            <ol>
                <li>Click on the <strong>Intro Component</strong> box in Experience Editor</li>
                <li>Click <strong>More</strong> then click <strong>Edit Component Properties</strong></li>
                <li>Select a color from the dropdown under <strong>Component Background Color</strong></li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "intro",
        title: "Update Text",
        body: `
            <ol>
                <li>Click directly on the text field you want to edit in the <strong>Intro</strong> component</li>
                <li>Make your updates using the inline editor</li>
                <li>Click <strong>Save</strong> then <strong>Publish</strong></li>
            </ol>
            <p><strong>Note:</strong> You can edit the pictures and the text in the Intro component sub-sections as well. This is done as you would any other image or text field.</p>
        `
    },
    {
        parentTab: "careers",
        component: "local-award",
        title: "Customize Award Callout Component parameters",
        body: `
            <ol>
                <li>Click on the <strong>Award Callout Component</strong> box in Experience Editor</li>
                <li>Click <strong>More</strong> then click <strong>Edit Component Properties</strong></li>
                <li>Choose your background color from the <strong>Component Background Color</strong> dropdown</li>
                <li>Choose your <strong>Media Position</strong> (left or right) from the dropdown</li>
                <li>Choose the type of <strong>Type of Award Component</strong> (Awards Slider or Single Award) from the dropdown</li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
            <p><strong>Note:</strong> The Awards Slider component allows for multiple awards to be displayed in a carousel format, while the Single Award component displays one award at a time. The Media Position dropdown only affects the Single Award component type.</p>
        `
    },
    {
        parentTab: "careers",
        component: "local-award",
        title: "Add a single award callout",
        body: `
            <ol>
                <li>Select <strong>Single Award</strong> from the "Type of Award Component" dropdown in the component parameters</li>
                <li>Click the image and follow standard procedures for adding an image</li>
                <li>Click the text fields and enter your content</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "local-award",
        title: "Add an awards slider",
        body: `
            <ol>
                <li>Select <strong>Awards Slider</strong> from the "Type of Award Component" dropdown in the component parameters</li>
                <li>Click the blue dashed placeholder box and click <strong>Add here</strong></li>
                <li>Select Awards Slider then click <strong>Select</strong></li>
                <li>Either select an Awards Slider in the "_Content" folder or create a new one by clicking <strong>Create New Content</strong>, entering a name then click <strong>OK</strong></li>
                <li>Click <strong>Save</strong></li>
                <li>Click the placeholder image and follow standard procedures for adding an image</li>
                <li>Click the text fields and enter the name of the award and a link to the award's website</li>
                <li>To add a new award, click anywhere outside of an award in the slider, then click the <strong>Insert a new item (+)</strong> button, name your award and click <strong>OK</strong></li>
                <li>Repeat previous steps to edit the image, name and link for each award you want to add to the slider</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "local-award",
        title: "Edit awards slider parameters",
        body: `
            <ol>
                <li>Click anywhere in the awards slider to bring up the dialogue, click <strong>More</strong> then click <strong>Edit component properties</strong></li>
                <li><strong>Slides To Show</strong> refers to how many slides are visible at once in the carousel - Enter a number between 1 and 5</li>
                <li><strong>Slides To Scroll</strong> refers to how many slides will move when the user clicks the arrow buttons - Enter a number between 1 and 5</li>
                <li><strong>Infinite</strong> refers to whether the carousel will loop back to the beginning when the user reaches the end - Check or uncheck the box</li> 
                <li><strong>Dots</strong> refers to whether the carousel will display navigation dots below the slides - Check or uncheck the box</li>
                <li><strong>Autoplay</strong> refers to whether the carousel will automatically advance through the slides - Check or uncheck the box</li>
                <li><strong>Slider Width</strong> refers to the width of the carousel - Select from the dropdown</li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "local-award",
        title: "Add a new award to the slider",
        body: `
            <ol>
                <li>In the <strong>Experience Editor</strong>, click anywhere in the awards slider to bring up the dialogue</li>
                <li>Click the <strong>Insert a new item (+)</strong> button</li>
                <li>Ensure Award Slide is selected, enter a name for the Award Slide item, and click <strong>OK</strong></li>
                <li>Fill in the Name of the Award, Award Logo, and Link to Award fields in the <strong>Experience Editor</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "local-award",
        title: "Remove award from the slider",
        body: `
            <ol>
                <li>Go to the content tree in the <strong>Content Editor</strong> and find the <strong>Awards Slider</strong> you are looking to add an award to</li>
                <li>Expand the awards slider you are editing</li>
                <li>Right click on the award you want to remove and select <strong>Delete</strong></li>
                <li>Confirm the deletion</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "local-resources",
        title: "Edit background color",
        body: `
            <ol>
                <li>Click on the <strong>Local Resources Component</strong> box in Experience Editor</li>
                <li>Click <strong>More</strong> then click <strong>Edit Component Properties</strong></li>
                <li>Select a color from the dropdown under <strong>Component Background Color</strong></li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "local-resources",
        title: "Edit Local Resources icons and links",
        body: `
            <ol>
                <li>Click on the <strong>icon image</strong> and change, edit or remove as you would any other image</li>
                <li>Edit link text by clicking on the text and using the inline editor to make changes</li>
                <li>You can modify the <strong>URL</strong> by either click on the image or on the text, then clicking the "Edit Link" or "Remove Link" icon</li>
                <li>From there, you select the link type, add URL and ensure the "Target Window" is set</li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "local-community",
        title: "Edit background color",
        body: `
            <ol>
                <li>Click on the <strong>Local Community Component</strong> box in Experience Editor</li>
                <li>Click <strong>More</strong> then click <strong>Edit Component Properties</strong></li>
                <li>Select a color from the dropdown under <strong>Component Background Color</strong></li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "local-community",
        title: "Edit images and text",
        body: `
            <ol>
                <li>Click on the image and make your desired changes as you normally would</li>
                <li>Click text and use the inline editor to make changes</li>                            
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "local-news",
        title: "Edit background color",
        body: `
            <ol>
                <li>Click on the <strong>News Widget Component</strong> box in Experience Editor</li>
                <li>Click <strong>More</strong> then click <strong>Edit Component Properties</strong></li>
                <li>Select a color from the dropdown under <strong>Component Background Color</strong></li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "local-news",
        title: "Modify which widget is displayed",
        body: `
            <ol>
                <li>Click on the <strong>News Widget Component</strong> box in Experience Editor</li>
                <li>Click <strong>More</strong> then click <strong>Edit Component Properties</strong></li>
                <li>Enter ID in the text box labeled <strong>EmbedSocial Widget ID</strong></li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
            <p><strong>Note:</strong> The widget ID is provided by the EmbedSocial platform. Contact your administrator if you need assistance.</p>
        `
    },
    {
        parentTab: "careers",
        component: "local-news",
        title: "Remove social widget",
        body: `
            <ol>
                <li>Click on the <strong>News Widget Component</strong> box in Experience Editor</li>
                <li>Click <strong>More</strong> then click <strong>Edit Component Properties</strong></li>
                <li>Delete the ID in the text box labeled <strong>EmbedSocial Widget ID</strong></li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "campus-video",
        title: "Edit background color",
        body: `
            <ol>
                <li>Click on the <strong>Campus Video Component</strong> box in Experience Editor</li>
                <li>Click <strong>More</strong> then click <strong>Edit Component Properties</strong></li>
                <li>Select a color from the dropdown under <strong>Component Background Color</strong></li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "campus-video",
        title: "Add a video",
        body: `
            <ol>
                <li>Click the blue dashed box in Experience Editor under the Video Component</li>
                <li>Click <strong>Add here</strong></li>
                <li>Click <strong>Careers Video</strong> then click <strong>Select</strong></li>
                <li>Choose a video from the _Content folder or click <strong>Create New Content</strong> to add a new video to the Media Library</li>
                <li>Configure the video settings as needed</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "campus-video",
        title: "Remove video",
        body: `
            <ol>
                <li>Click on the video</li>
                <li>Click the <strong>Remove (X)</strong> button</li>
                <li>Save</li>
            </ol>
        `
    },
    {
        parentTab: "careers",
        component: "local-job-postings",
        title: "Edit job postings component",
        body: `
            <ol>
                <li>Click <strong>Job Postings Component</strong> to bring up the dialogue, click <strong>More</strong> then click <strong>Edit component properties</strong></li>
                <li><strong>Filter</strong> refers to the keyword used to filter job postings - Enter a keyword or leave blank for all postings</li>
                <li><strong>Limit</strong> refers to the maximum number of job postings to display - Enter a number between 1-10 (3 recommended) or leave blank for default of 10</li>
                <li><strong>See All Careers Link</strong> refers to the URL for the "See All" button - Select a page from the dropdown</li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>                          
            </ol>
            <p><strong>Note:</strong> The job postings component is connected to the external job board and will automatically update with new postings. The filter option allows you to display only certain types of jobs based on keywords. Use "," for the AND operator and "|" for the OR operator</p>
        `
    },
    {
        parentTab: "general_components",
        component: "new-content",
        title: "Add a New Content component",
        body: `
            <ol>
                <li>From the Experience Editor, click <strong>Home</strong> in the command ribbon and under <strong>New</strong> click <strong>Component</strong></li>
                <li>Click <strong>Add here</strong> where you would like to place the new component</li>
                <li>Select a frame from the available options 1-4</li>
                <li>Click <strong>Select</strong></li>
                <li>Click in the new frame area and click <strong>Add here</strong></li>
                <li>Choose from the available Content component options - Default, Image Bottom, Image Left, Image Right</li>
                <li>Click <strong>Select</strong></li>
                <li>Either Select Existing Content or Create New Content from the next dialogue</li>
                <li>If creating new content, input a name and then click <strong>OK</strong></li> 
                <li>Save</li>                          
            </ol>
        `
    },
    {
        parentTab: "general_components",
        component: "new-content",
        title: "Add/Edit an Image",
        body: `
            <ol>
                <li>Click on the placeholder image</li> 
                <li>Click either the <strong>Add Image</strong>, <strong>Edit Image</strong> or <strong>Remove Image</strong> button</li>
                <li>Add, edit or remove an image as you normally would</li>
                <li>Click <strong>Select</strong></li>
                <li>Save</li>                          
            </ol>
        `
    },
    {
        parentTab: "general_components",
        component: "new-content",
        title: "Add/Edit Text",
        body: `
            <ol>
                <li>Click on the placeholder text</li> 
                <li>Add, edit or remove text as you normally would</li>
                <li>Save</li>                          
            </ol>
            <p><strong>Note:</strong> The last text field is a rich text field and can include various formatting options such as bold, italic, lists, and links.</p>
        `
    },
    {
        parentTab: "general_components",
        component: "new-content",
        title: "Add/Edit/Remove call to action button",
        body: `
            <ol>
                <li>Click on the button near the bottom of the New Content component just above the dashed line box</li>
                <li>Click either the <strong>Edit Button</strong> or <strong>Remove Button</strong> button</li>
                <li>Select a link type from the left menu, then select a page or enter a URL or email address</li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>                          
            </ol>
            <p><strong>Note:</strong> In the edit link dialogue, you have the option to input a style class for the button. Please input "button" if you would like your button to follow brand style guidelines for the site.</p>
        `
    },
    {
        parentTab: "general_components",
        component: "new-content",
        title: "Add component to the New Content placeholder",
        body: `
            <ol>
                <li>Click into the dashed line box at the bottom of the New Content component</li> 
                <li>This will bring up a dialogue where you can select a component to add</li>
                <li>Choose from the available components, then click <strong>Select</strong></li>
                <li>Configure the component fields in the dialog that appears</li>
                <li>Save</li>                          
            </ol>
        `
    },
    {
        parentTab: "general_components",
        component: "image-banner",
        title: "Add new Enhanced Content Image Banner",
        body: `
            <ol>
                <li>From the Experience Editor, click <strong>Home</strong> in the command ribbon and under <strong>New</strong> click <strong>Component</strong></li>
                <li>Click <strong>Add here</strong> where you would like to place the new component</li>
                <li>Choose <strong>Enhanced Content Image Banner</strong> and click <strong>Select</strong></li>
                <li>Choose your data source - either select an existing item or create a new one</li>
                <li>Click <strong>Select</strong></li>
                <li>Save</li>                          
            </ol>
        `
    },
    {
        parentTab: "general_components",
        component: "image-banner",
        title: "Add/Edit an Image",
        body: `
            <ol>
                <li>Click on the placeholder image</li> 
                <li>Click either the <strong>Add Image</strong>, <strong>Edit Image</strong> or <strong>Remove Image</strong> button</li>
                <li>Add, edit or remove an image as you normally would</li>
                <li>Click <strong>Select</strong></li>
                <li>Save</li>                          
            </ol>
        `
    },
    {
        parentTab: "general_components",
        component: "image-banner",
        title: "Add/Edit Text",
        body: `
            <ol>
                <li>Click on the placeholder text</li> 
                <li>Add, edit or remove text as you normally would</li>
                <li>Save</li>                          
            </ol>
            <p><strong>Note:</strong> The last text field is a rich text field and can include various formatting options such as bold, italic, lists, and links.</p>
        `
    },
    {
        parentTab: "general_components",
        component: "image-banner",
        title: "Add/Edit/Remove call to action button",
        body: `
            <ol>
                <li>Click on the button near the bottom of the Enhanced Content Image Banner component just above the dashed line box</li>
                <li>Click either the <strong>Edit Button</strong> or <strong>Remove Button</strong> button</li>
                <li>Select a link type from the left menu, then select a page or enter a URL or email address</li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>                          
            </ol>
            <p><strong>Note:</strong> In the edit link dialogue, you have the option to input a style class for the button. Please input "button" if you would like your button to follow brand style guidelines for the site.</p>
        `
    },
    {
        parentTab: "general_components",
        component: "icon-list",
        title: "Add new Icon List component",
        body: `
            <ol>
                <li>From the Experience Editor, click <strong>Home</strong> in the command ribbon and under <strong>New</strong> click <strong>Component</strong></li>
                <li>Click <strong>Add here</strong> in the frame where you would like to place the new component</li>
                <li>Choose <strong>Icon List</strong> and click <strong>Select</strong></li>
                <li>Choose your data source - either select an existing item or create a new one</li>
                <li>Click <strong>Select</strong></li>
                <li>Save</li>                          
            </ol>
            <p><strong>Note:</strong> In order to add a new icon list component, you must first insert a 1, 2, 3 or 4 column frame. Then you can place the icon list component within that frame.</p>
        `
    },
    {
        parentTab: "general_components",
        component: "icon-list",
        title: "Edit Icon List parameters",
        body: `
            <ol>
                <li>Once a new Icon List component is added, click anywhere in the box that contains the <strong>Edit Global icon</strong> headline</li>
                <li>Click <strong>More</strong> then click <strong>Edit Component Properties</strong></li>
                <li>Choose <strong>Icon List</strong> and click <strong>Select</strong></li>
                <li>Choose your <strong>List Type</strong> - Unordered, Ordered (Numerical), or Ordered (Alpha)</li>
                <li>Choose your <strong>List Decoration</strong> - Default, Icon or Vertical bar</li>
                <li>Choose your List Options - Actionable (they have a hyperlink), Columns (the items will be ordered vertically), Separators (they will have a vertical bar between them) or Animated (they will have a decorative arrow that behind the text on hover)</li>
                <li>If you would like everything to be vertically centered, you can check the <strong>Vertically Centered</strong> box under the <strong>Controls</strong> section</li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>                          
            </ol>
            <p><strong>Note:</strong> In order to add a new icon list component, you must first insert a 1, 2, 3 or 4 column frame. Then you can place the icon list component within that frame.</p>
        `
    },
    {
        parentTab: "general_components",
        component: "icon-list",
        title: "Add new list item to Icon List",
        body: `
            <ol>
                <li>From the Experience Editor, click anywhere in the box that contains the <strong>Edit Global icon</strong> headline</li>
                <li>Click on the <strong>Add item (+)</strong> button in the dialogue box that comes up</li>
                <li>Make sure the <strong>Icon List Item</strong> is selected, name it and click <strong>OK</strong></li>
                <li>Edit your headline, icon, and hyperlink as needed</li>
                <li>Save</li>                          
            </ol>
        `
    },
    {
        parentTab: "general_components",
        component: "icon-list",
        title: "Edit list item icon",
        body: `
            <ol>
                <li>Click on the icon to bring up the dialogue box</li>
                <li>Use the image edit buttons that appear to make your changes</li>
                <li>Save</li>   
            </ol>
            <p><strong>Note:</strong> You can also edit the hyperlink properties from this dialogue box. Use the hyperlink icons as you would normally.</p>
        `
    },
    {
        parentTab: "general_components",
        component: "icon-list",
        title: "Edit headline text and URL",
        body: `
            <ol>
                <li>Click in the text box you want to edit and make your changes</li>
                <li>While editing text, you will see 2 hyperlink buttons in the toolbar - Edit or Remove</li>
                <li>Select the link type, make your changes to the URL and click <strong>OK</strong></li>
                <li>Save</li>                          
            </ol>
        `
    },
    {
        parentTab: "general_components",
        component: "accordion",
        title: "Add new Accordion component",
        body: `
            <ol>
                <li>From the Experience Editor, click <strong>Home</strong> in the command ribbon and under <strong>New</strong> click <strong>Component</strong></li>
                <li>Click <strong>Add here</strong> in the frame where you would like to place the new component</li>
                <li>Choose <strong>Accordion</strong> and click <strong>Select</strong></li>
                <li>Choose your data source - either select an existing item or create a new one</li>
                <li>Click <strong>Select</strong></li>
                <li>Save</li>                          
            </ol>
            <p><strong>Note:</strong> In order to add a new accordion component, you must first insert a 1, 2, 3 or 4 column frame. Then you can place the accordion component within that frame.</p>
        `
    },
    {
        parentTab: "general_components",
        component: "accordion",
        title: "Add/Edit Text",
        body: `
            <ol>
                <li>Click on the placeholder text</li> 
                <li>Add, edit or remove text as you normally would</li>
                <li>Save</li>                          
            </ol>
            <p><strong>Note:</strong> The expanded text field is a rich text field and can include various formatting options such as bold, italic, lists, and links.</p>
        `
    },
    {
        parentTab: "general_components",
        component: "accordion",
        title: "Add new Accordion item to the list",
        body: `
            <ol>
                <li>From the Content Editor, find the page you are working on, expand and click on the <strong>_Content</strong> folder</li>
                <li>Find the Accordion component that you would like to add a new item to and click on it</li>
                <li>You can either right-click on the accordion component, click <strong>Insert</strong> and then <strong>Consolidated Content</strong>, or use the top command ribbon to add a new <strong>Consolidated Content</strong> item</li>
                <li>Name the item and click <strong>OK</strong></li>
                <li>Fill in the <strong>Heading Level 1</strong> and <strong>Content</strong> fields for the new accordion item</li>
                <li>Save</li>                          
            </ol>
            <p><strong>Note:</strong> The only part of the Consolidated Content item that is used for an accordion item is the <strong>Heading Level 1</strong> and the <strong>Content</strong> fields. All other fields are ignored.</p>
        `
    }
];

const infoPages = {
    careers: {
        title: "Careers Site Components",
        body: `
            <div class="info-page-section">
                <h3>Choose a component from the left menu</h3>
                <p>Use the expanded submenu to select component-specific instructions for the Careers site.</p>
            </div>
            <div class="info-page-section">
                <h3>Job Categories Page</h3>
                <p>Includes instructions for components such as Why Unum, Roles, Testimonials, News Widget, Video, Award Callout, and Job Postings.</p>
                <p>Job categories include: <strong>Audit</strong>, <strong>Claims</strong>, <strong>Customer Service</strong>, <strong>Finance</strong>, <strong>IT</strong>, <strong>Medical/Vocational</strong>, and <strong>Sales</strong>.</p>
            </div>
            <div class="info-page-section">
                <h3>Locations Page</h3>
                <p>Includes instructions for components such as Intro, Local Awards, Local Resources, Local Community, Local News, Campus Video and Local Job Postings.</p>
                <p>Locations include: <strong>Atlanta</strong>, <strong>Baton Rouge</strong>, <strong>Chattanooga</strong>, <strong>Columbia</strong> and <strong>Portland</strong>.</p>
            </div>
        `
    },
    general_components: {
        title: "General Components",
        body: `
            <div class="task">
            <div class="task-header" role="button" aria-expanded="false" tabindex="0">
                <span>
                    Add a new component

                </span>
                <span>▼</span>
            </div>
            <div class="task-body">
            <ol>
                <li>Click HOME in the Experience Editor ribbon</li>
                <li>Under the New section, click <strong>Component</strong></li>
                <li>Click <strong>Add Here</strong> where you would like to place the new component</li>
                <li>Select a component from the list</li>
                <li>Configure the component fields in the dialog that appears</li>
                <li>Click <strong>OK</strong> and save changes</li>
            </ol>
        </div>
        </div><div class="task">
            <div class="task-header" role="button" aria-expanded="false" tabindex="0">
                <span>
                    Move or reorder a component

                </span>
                <span>▼</span>
            </div>
            <div class="task-body">
            <ol>
                <li>Click the component to reveal the component toolbar</li>
                <li>Click the <strong>Move</strong> button to open the move dialog</li>
                <li>Click <strong>Move here</strong> on the desired placeholder or position</li>
                <li>Alternatively, use the drag handle (if available) to drag the component to a new position within the same placeholder</li>
                <li>Save</li>
            </ol>
        </div>
        </div><div class="task">
            <div class="task-header" role="button" aria-expanded="false" tabindex="0">
                <span>
                    Remove a component

                </span>
                <span>▼</span>
            </div>
            <div class="task-body">
            <ol>
                <li>Click on the component to reveal the component toolbar</li>
                <li>Click on the red <strong>(X)</strong> icon</li>
                <li>Confirm the removal when prompted</li>
                <li>Save</li>
            </ol>
            <p><strong>Note:</strong> Removing a component from a page does not delete its datasource item. The content item in the tree is unaffected.</p>
        </div>
        </div><div class="task">
            <div class="task-header" role="button" aria-expanded="false" tabindex="0">
                <span>
                    Edit a component's datasource

                </span>
                <span>▼</span>
            </div>
            <div class="task-body">
            <ol>
                <li>Click on the component to reveal the component toolbar</li>
                <li>Click <strong>More</strong> then <strong>Edit Component Properties</strong></li>
                <li>In the dialog, update the <strong>Data Source</strong> field to point to a different content item, or click <strong>Edit the related item</strong> to open the current datasource for editing</li>
                <li>Save the datasource item changes</li>
                <li>Publish the page</li>
            </ol>
        </div>
        </div><div class="task">
            <div class="task-header" role="button" aria-expanded="false" tabindex="0">
                <span>
                    Modify component options

                </span>
                <span>▼</span>
            </div>
            <div class="task-body">
            <ol>
                <li>Click on the component to reveal the component toolbar</li>
                <li>Click <strong>More</strong> then <strong>Edit Component Properties</strong></li>
                <li>Update any available options (e.g., layout, style, visibility)</li>
                <li>Click <strong>OK</strong></li>
                <li>Save</li>
            </ol>
        </div>
        </div></div>
        `
    }
};
