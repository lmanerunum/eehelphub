/*
 * script.js
 * -----------------------------------------------------------------------
 * Behavior for the live Help Hub site (index.html).
 * All navigation/content data lives in data.js (menuStructure, data,
 * submenuData, infoPages), which is loaded before this file.
 * The sidebar is generated dynamically from menuStructure so that items
 * added/edited via the admin portal (admin.html) show up automatically
 * once data.js is replaced/updated.
 * -----------------------------------------------------------------------
 */

const sidebarEl = document.getElementById("sidebar");
const contentEl = document.getElementById("content");
const searchInput = document.getElementById("search");
const searchClear = document.getElementById("search-clear");
const hamburgerEl = document.getElementById("hamburger");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("closeIcon");
const editorFunctionsContainer = document.getElementById("editor-functions");
const managerFunctionsContainer = document.getElementById("manager-functions");

let currentTab = "";
let currentComponent = "";
let currentTitle = "";

/* ── Build sidebar dynamically from menuStructure ── */
function buildSidebar() {
    editorFunctionsContainer.innerHTML = "";
    managerFunctionsContainer.innerHTML = "";

    menuStructure.forEach(entry => {
        const container = entry.section === "Manager Functions" ? managerFunctionsContainer : editorFunctionsContainer;

        if (entry.type === "tab") {
            const tabEl = document.createElement("div");
            tabEl.className = "tab";
            tabEl.dataset.tab = entry.tab;
            tabEl.textContent = entry.label;
            container.appendChild(tabEl);
        } else if (entry.type === "menu-group") {
            const groupEl = document.createElement("div");
            groupEl.className = "menu-group";
            groupEl.dataset.menuGroup = entry.tab;

            const tabEl = document.createElement("div");
            tabEl.className = "tab has-submenu";
            tabEl.dataset.tab = entry.tab;
            tabEl.innerHTML = `<span>${entry.label}</span><span class="submenu-arrow">▶</span>`;
            groupEl.appendChild(tabEl);

            const submenuEl = document.createElement("div");
            submenuEl.className = "submenu";

            (entry.submenu || []).forEach(sub => {
                if (sub.type === "heading") {
                    const headingEl = document.createElement("span");
                    headingEl.className = "submenu-heading";
                    headingEl.innerHTML = `<strong>${sub.label}</strong>`;
                    submenuEl.appendChild(headingEl);
                } else {
                    const subtabEl = document.createElement("div");
                    subtabEl.className = "subtab";
                    subtabEl.dataset.tab = entry.tab;
                    subtabEl.dataset.component = sub.component;
                    subtabEl.textContent = sub.label;
                    submenuEl.appendChild(subtabEl);
                }
            });

            groupEl.appendChild(submenuEl);
            container.appendChild(groupEl);
        }
    });

    /* Set initial active tab to the first available tab */
    const firstTab = document.querySelector(".tab");
    if (firstTab) {
        firstTab.classList.add("active");
        currentTab = firstTab.dataset.tab;
        currentTitle = firstTab.textContent.trim();
    }
}

/* Highlight helper */
function highlight(text, search) {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
}

function bindExpandCollapseAll() {
    const tasks = contentEl.querySelectorAll(".task");
    if (tasks.length === 0) return;

    const controls = document.createElement("div");
    controls.className = "content-controls";
    controls.innerHTML = `<a class="expand-all-btn">Expand All</a><span>|</span><a class="collapse-all-btn">Collapse All</a>`;

    controls.querySelector(".expand-all-btn").addEventListener("click", () => {
        contentEl.querySelectorAll(".task").forEach(task => {
            task.classList.add("open");
            task.querySelector(".task-header").setAttribute("aria-expanded", "true");
        });
    });

    controls.querySelector(".collapse-all-btn").addEventListener("click", () => {
        contentEl.querySelectorAll(".task").forEach(task => {
            task.classList.remove("open");
            task.querySelector(".task-header").setAttribute("aria-expanded", "false");
        });
    });

    const title = contentEl.querySelector(".content-title");
    if (title) {
        title.after(controls);
    } else {
        contentEl.prepend(controls);
    }
}

function renderInfoPage(tab) {
    const infoPage = infoPages[tab];

    contentEl.innerHTML = `
        <h2 class="content-title">${currentTitle}</h2>
        <div class="info-page">
            ${infoPage.body}
        </div>
    `;

    contentEl.querySelectorAll(".task-header").forEach(header => {
        header.addEventListener("click", () => {
            const task = header.closest(".task");
            const isOpen = task.classList.toggle("open");
            header.setAttribute("aria-expanded", isOpen);
        });
        header.addEventListener("keypress", e => {
            if (e.key === "Enter" || e.key === " ") header.click();
        });
    });

    bindExpandCollapseAll();
}

function render() {
    const search = searchInput.value.toLowerCase().trim();
    contentEl.innerHTML = "";

    const activeData = currentComponent ? submenuData : data;
    let items = activeData;

    if (search) {
        items = [...data, ...submenuData].filter(item =>
            item.title.toLowerCase().includes(search) ||
            item.body.toLowerCase().includes(search)
        );
    } else if (currentComponent) {
        items = submenuData.filter(item => item.parentTab === currentTab && item.component === currentComponent);
    } else if (infoPages[currentTab]) {
        renderInfoPage(currentTab);
        return;
    } else {
        items = data.filter(item => item.tab === currentTab);
    }

    if (items.length === 0) {
        contentEl.innerHTML = `
            <h2 class="content-title">${search ? "Search Results" : currentTitle}</h2>
            <div class="no-results">No results found. Try another search.</div>
        `;
        return;
    }

    contentEl.insertAdjacentHTML("beforeend", `<h2 class="content-title">${search ? "Search Results" : currentTitle}</h2>`);

    items.forEach((item, index) => {
        const el = document.createElement("div");
        el.className = "task";

        const title = highlight(item.title, search);
        const body = highlight(item.body, search);

        el.innerHTML = `
            <div class="task-header" role="button" aria-expanded="false" tabindex="0">
                <span>
                    ${title}
                    ${search ? `<span class="category-label">(${item.tab})</span>` : ""}
                </span>
                <span>▼</span>
            </div>
            <div class="task-body">${body}</div>
        `;

        const header = el.querySelector(".task-header");

        function toggle() {
            const isOpen = el.classList.toggle("open");
            header.setAttribute("aria-expanded", isOpen);
        }

        header.addEventListener("click", toggle);
        header.addEventListener("keypress", e => {
            if (e.key === "Enter" || e.key === " ") toggle();
        });

        if (search) {
            el.classList.add("open");
            header.setAttribute("aria-expanded", "true");
        }

        contentEl.appendChild(el);
    });
    bindExpandCollapseAll();
}

function bindNavEvents() {
    /* Tab click (event delegation, works for dynamically created tabs) */
    sidebarEl.addEventListener("click", e => {
        const tab = e.target.closest(".tab");
        const subtab = e.target.closest(".subtab");

        if (subtab) {
            document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
            document.querySelectorAll(".subtab").forEach(t => t.classList.remove("active"));
            subtab.classList.add("active");

            const menuGroup = subtab.closest(".menu-group");
            const parentTab = menuGroup.querySelector(".tab");

            menuGroup.classList.add("open");
            parentTab.classList.add("active");
            currentTab = subtab.dataset.tab;
            currentComponent = subtab.dataset.component;
            currentTitle = subtab.textContent.trim();
            searchInput.value = "";
            searchClear.style.display = "none";
            hamburgerEl.click();
            render();
            return;
        }

        if (tab) {
            document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
            document.querySelectorAll(".subtab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentTab = tab.dataset.tab;
            currentComponent = "";
            currentTitle = tab.textContent.trim().replace("▶", "").trim();

            const menuGroup = tab.closest(".menu-group");

            if (menuGroup) {
                menuGroup.classList.toggle("open");
            } else {
                hamburgerEl.click();
            }

            render();
        }
    });

    /* Search */
    searchInput.addEventListener("input", () => {
        searchClear.style.display = searchInput.value ? "block" : "none";
        render();
    });

    searchClear.addEventListener("click", () => {
        searchInput.value = "";
        searchClear.style.display = "none";
        searchInput.focus();
        render();
    });

    hamburgerEl.addEventListener("click", () => {
        sidebarEl.classList.toggle("open");
        hamburgerIcon.style.display = sidebarEl.classList.contains("open") ? "none" : "block";
        closeIcon.style.display = sidebarEl.classList.contains("open") ? "block" : "none";
    });
}

buildSidebar();
bindNavEvents();
render();

