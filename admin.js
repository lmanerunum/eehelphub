/*
 * admin.js
 * -----------------------------------------------------------------------
 * Admin portal logic. Loads the shared data.js arrays/objects into memory,
 * provides CRUD UI for menuStructure, data, submenuData, and infoPages,
 * and exports an updated data.js file reflecting all in-memory changes.
 * -----------------------------------------------------------------------
 */

/* Deep-clone the shared data so edits don't mutate data.js globals until export */
let workingMenuStructure = JSON.parse(JSON.stringify(menuStructure));
let workingData = JSON.parse(JSON.stringify(data));
let workingSubmenuData = JSON.parse(JSON.stringify(submenuData));
let workingInfoPages = JSON.parse(JSON.stringify(infoPages));

const modalBackdrop = document.getElementById("modal-backdrop");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalSave = document.getElementById("modal-save");
const modalCancel = document.getElementById("modal-cancel");

let modalSaveHandler = null;

function openModal(title, bodyHtml, onSave) {
    modalTitle.textContent = title;
    modalBody.innerHTML = bodyHtml;
    modalSaveHandler = onSave;
    modalBackdrop.classList.add("open");
}

function closeModal() {
    modalBackdrop.classList.remove("open");
    modalSaveHandler = null;
}

modalCancel.addEventListener("click", closeModal);
modalSave.addEventListener("click", () => {
    if (modalSaveHandler) {
        const result = modalSaveHandler();
        if (result !== false) closeModal();
    }
});

function fieldRow(id, label, value, type = "text") {
    if (type === "textarea") {
        return `
            <div class="modal-field">
                <label for="${id}">${label}</label>
                <textarea id="${id}">${value || ""}</textarea>
            </div>
        `;
    }
    return `
        <div class="modal-field">
            <label for="${id}">${label}</label>
            <input type="text" id="${id}" value="${(value || "").toString().replace(/"/g, "&quot;")}">
        </div>
    `;
}

function selectRow(id, label, options, selected) {
    const opts = options.map(o => `<option value="${o.value}" ${o.value === selected ? "selected" : ""}>${o.label}</option>`).join("");
    return `
        <div class="modal-field">
            <label for="${id}">${label}</label>
            <select id="${id}">${opts}</select>
        </div>
    `;
}

function allTabOptions() {
    const options = [];
    workingMenuStructure.forEach(entry => {
        if (entry.type === "tab") options.push({ value: entry.tab, label: entry.label });
        if (entry.type === "menu-group") options.push({ value: entry.tab, label: entry.label + " (menu group)" });
    });
    return options;
}

/* ── Section navigation ── */
document.querySelectorAll(".admin-tab").forEach(tabBtn => {
    tabBtn.addEventListener("click", () => {
        document.querySelectorAll(".admin-tab").forEach(t => t.classList.remove("active"));
        document.querySelectorAll(".admin-section").forEach(s => s.classList.remove("active"));
        tabBtn.classList.add("active");
        document.getElementById(`section-${tabBtn.dataset.section}`).classList.add("active");
    });
});

/* ── Menu Structure rendering ── */
function renderMenuList() {
    const list = document.getElementById("menu-list");
    list.innerHTML = "";

    workingMenuStructure.forEach((entry, index) => {
        const card = document.createElement("div");
        card.className = "admin-card";

        const submenuHtml = entry.type === "menu-group"
            ? `<div class="admin-submenu-items">
                ${(entry.submenu || []).map((sub, subIndex) => `
                    <div class="admin-submenu-item">
                        <span>${sub.type === "heading" ? `<em>${sub.label}</em>` : sub.label}</span>
                        <span class="admin-card-actions">
                            <button data-edit-sub="${index}:${subIndex}">Edit</button>
                            <button class="delete-btn" data-delete-sub="${index}:${subIndex}">Delete</button>
                        </span>
                    </div>
                `).join("")}
                <button class="add-btn" style="margin-top:6px;" data-add-sub="${index}">+ Add Submenu Item</button>
               </div>`
            : "";

        card.innerHTML = `
            <div class="admin-card-info">
                <div class="admin-card-title">${entry.label}</div>
                <div class="admin-card-meta">Section: ${entry.section} | Type: ${entry.type} | Tab key: ${entry.tab}</div>
                ${submenuHtml}
            </div>
            <div class="admin-card-actions">
                <button data-edit-menu="${index}">Edit</button>
                <button class="delete-btn" data-delete-menu="${index}">Delete</button>
            </div>
        `;
        list.appendChild(card);
    });
}

function menuEntryModal(existing, index) {
    const isGroup = existing && existing.type === "menu-group";
    const bodyHtml = `
        ${selectRow("field-section", "Section", [
            { value: "Editor Functions", label: "Editor Functions" },
            { value: "Manager Functions", label: "Manager Functions" }
        ], existing ? existing.section : "Editor Functions")}
        ${selectRow("field-type", "Type", [
            { value: "tab", label: "Tab" },
            { value: "menu-group", label: "Menu Group" }
        ], existing ? existing.type : "tab")}
        ${fieldRow("field-tab", "Tab Key (unique, no spaces)", existing ? existing.tab : "")}
        ${fieldRow("field-label", "Label", existing ? existing.label : "")}
    `;

    openModal(existing ? "Edit Menu Item" : "Add Menu Item", bodyHtml, () => {
        const section = document.getElementById("field-section").value;
        const type = document.getElementById("field-type").value;
        const tab = document.getElementById("field-tab").value.trim();
        const label = document.getElementById("field-label").value.trim();

        if (!tab || !label) { alert("Tab key and label are required."); return false; }

        const entry = { section, type, tab, label };
        if (type === "menu-group") entry.submenu = existing && existing.submenu ? existing.submenu : [];

        if (index === undefined) {
            workingMenuStructure.push(entry);
        } else {
            workingMenuStructure[index] = entry;
        }
        renderMenuList();
    });
}

function submenuItemModal(menuIndex, subIndex) {
    const existing = subIndex !== undefined ? workingMenuStructure[menuIndex].submenu[subIndex] : null;
    const bodyHtml = `
        ${selectRow("field-subtype", "Type", [
            { value: "item", label: "Item" },
            { value: "heading", label: "Heading" }
        ], existing ? existing.type : "item")}
        ${fieldRow("field-sublabel", "Label", existing ? existing.label : "")}
        ${fieldRow("field-subcomponent", "Component Key (items only, unique within group)", existing ? existing.component : "")}
    `;

    openModal(existing ? "Edit Submenu Item" : "Add Submenu Item", bodyHtml, () => {
        const type = document.getElementById("field-subtype").value;
        const label = document.getElementById("field-sublabel").value.trim();
        const component = document.getElementById("field-subcomponent").value.trim();

        if (!label) { alert("Label is required."); return false; }
        if (type === "item" && !component) { alert("Component key is required for items."); return false; }

        const entry = type === "heading" ? { type, label } : { type, component, label };

        if (!workingMenuStructure[menuIndex].submenu) workingMenuStructure[menuIndex].submenu = [];

        if (subIndex === undefined) {
            workingMenuStructure[menuIndex].submenu.push(entry);
        } else {
            workingMenuStructure[menuIndex].submenu[subIndex] = entry;
        }
        renderMenuList();
    });
}

document.getElementById("menu-list").addEventListener("click", e => {
    const editMenu = e.target.closest("[data-edit-menu]");
    const deleteMenu = e.target.closest("[data-delete-menu]");
    const editSub = e.target.closest("[data-edit-sub]");
    const deleteSub = e.target.closest("[data-delete-sub]");
    const addSub = e.target.closest("[data-add-sub]");

    if (editMenu) {
        const index = Number(editMenu.dataset.editMenu);
        menuEntryModal(workingMenuStructure[index], index);
    } else if (deleteMenu) {
        const index = Number(deleteMenu.dataset.deleteMenu);
        if (confirm("Delete this menu item? This does not delete its associated tasks.")) {
            workingMenuStructure.splice(index, 1);
            renderMenuList();
        }
    } else if (addSub) {
        const menuIndex = Number(addSub.dataset.addSub);
        submenuItemModal(menuIndex);
    } else if (editSub) {
        const [menuIndex, subIndex] = editSub.dataset.editSub.split(":").map(Number);
        submenuItemModal(menuIndex, subIndex);
    } else if (deleteSub) {
        const [menuIndex, subIndex] = deleteSub.dataset.deleteSub.split(":").map(Number);
        if (confirm("Delete this submenu item?")) {
            workingMenuStructure[menuIndex].submenu.splice(subIndex, 1);
            renderMenuList();
        }
    }
});

document.querySelector('[data-add="menu-tab"]').addEventListener("click", () => menuEntryModal(null));
document.querySelector('[data-add="menu-group"]').addEventListener("click", () => menuEntryModal({ type: "menu-group" }));

/* ── Top-Level Tasks (data) ── */
function renderTasksList() {
    const list = document.getElementById("tasks-list");
    list.innerHTML = "";

    workingData.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "admin-card";
        card.innerHTML = `
            <div class="admin-card-info">
                <div class="admin-card-title">${item.title}</div>
                <div class="admin-card-meta">Tab: ${item.tab}</div>
            </div>
            <div class="admin-card-actions">
                <button data-edit-task="${index}">Edit</button>
                <button class="delete-btn" data-delete-task="${index}">Delete</button>
            </div>
        `;
        list.appendChild(card);
    });
}

function taskModal(existing, index) {
    const bodyHtml = `
        ${selectRow("field-task-tab", "Tab", allTabOptions(), existing ? existing.tab : "")}
        ${fieldRow("field-task-title", "Title", existing ? existing.title : "")}
        ${fieldRow("field-task-body", "Body (HTML)", existing ? existing.body : "", "textarea")}
    `;

    openModal(existing ? "Edit Task" : "Add Task", bodyHtml, () => {
        const tab = document.getElementById("field-task-tab").value;
        const title = document.getElementById("field-task-title").value.trim();
        const body = document.getElementById("field-task-body").value;

        if (!tab || !title) { alert("Tab and title are required."); return false; }

        const entry = { tab, title, body };
        if (index === undefined) {
            workingData.push(entry);
        } else {
            workingData[index] = entry;
        }
        renderTasksList();
    });
}

document.getElementById("tasks-list").addEventListener("click", e => {
    const editBtn = e.target.closest("[data-edit-task]");
    const deleteBtn = e.target.closest("[data-delete-task]");

    if (editBtn) {
        const index = Number(editBtn.dataset.editTask);
        taskModal(workingData[index], index);
    } else if (deleteBtn) {
        const index = Number(deleteBtn.dataset.deleteTask);
        if (confirm("Delete this task?")) {
            workingData.splice(index, 1);
            renderTasksList();
        }
    }
});

document.querySelector('[data-add="task"]').addEventListener("click", () => taskModal(null));

/* ── Submenu Tasks (submenuData) ── */
function menuGroupOptions() {
    return workingMenuStructure
        .filter(entry => entry.type === "menu-group")
        .map(entry => ({ value: entry.tab, label: entry.label }));
}

function componentOptionsFor(parentTab) {
    const group = workingMenuStructure.find(entry => entry.tab === parentTab);
    if (!group || !group.submenu) return [];
    return group.submenu
        .filter(sub => sub.type === "item")
        .map(sub => ({ value: sub.component, label: sub.label }));
}

function renderSubmenuList() {
    const list = document.getElementById("submenu-list");
    list.innerHTML = "";

    workingSubmenuData.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "admin-card";
        card.innerHTML = `
            <div class="admin-card-info">
                <div class="admin-card-title">${item.title}</div>
                <div class="admin-card-meta">Parent Tab: ${item.parentTab} | Component: ${item.component}</div>
            </div>
            <div class="admin-card-actions">
                <button data-edit-submenu-task="${index}">Edit</button>
                <button class="delete-btn" data-delete-submenu-task="${index}">Delete</button>
            </div>
        `;
        list.appendChild(card);
    });
}

function submenuTaskModal(existing, index) {
    const groupOpts = menuGroupOptions();
    const initialParent = existing ? existing.parentTab : (groupOpts[0] ? groupOpts[0].value : "");
    const compOpts = componentOptionsFor(initialParent);

    const bodyHtml = `
        ${selectRow("field-st-parent", "Parent Menu Group", groupOpts, initialParent)}
        ${selectRow("field-st-component", "Component", compOpts, existing ? existing.component : "")}
        ${fieldRow("field-st-title", "Title", existing ? existing.title : "")}
        ${fieldRow("field-st-body", "Body (HTML)", existing ? existing.body : "", "textarea")}
    `;

    openModal(existing ? "Edit Submenu Task" : "Add Submenu Task", bodyHtml, () => {
        const parentTab = document.getElementById("field-st-parent").value;
        const component = document.getElementById("field-st-component").value;
        const title = document.getElementById("field-st-title").value.trim();
        const body = document.getElementById("field-st-body").value;

        if (!parentTab || !component || !title) { alert("Parent, component, and title are required."); return false; }

        const entry = { parentTab, component, title, body };
        if (index === undefined) {
            workingSubmenuData.push(entry);
        } else {
            workingSubmenuData[index] = entry;
        }
        renderSubmenuList();
    });

    document.getElementById("field-st-parent").addEventListener("change", e => {
        const newOpts = componentOptionsFor(e.target.value);
        const selectEl = document.getElementById("field-st-component");
        selectEl.innerHTML = newOpts.map(o => `<option value="${o.value}">${o.label}</option>`).join("");
    });
}

document.getElementById("submenu-list").addEventListener("click", e => {
    const editBtn = e.target.closest("[data-edit-submenu-task]");
    const deleteBtn = e.target.closest("[data-delete-submenu-task]");

    if (editBtn) {
        const index = Number(editBtn.dataset.editSubmenuTask);
        submenuTaskModal(workingSubmenuData[index], index);
    } else if (deleteBtn) {
        const index = Number(deleteBtn.dataset.deleteSubmenuTask);
        if (confirm("Delete this submenu task?")) {
            workingSubmenuData.splice(index, 1);
            renderSubmenuList();
        }
    }
});

document.querySelector('[data-add="submenu-task"]').addEventListener("click", () => submenuTaskModal(null));

/* ── Info Pages ── */
function renderInfoPagesList() {
    const list = document.getElementById("infopages-list");
    list.innerHTML = "";

    Object.keys(workingInfoPages).forEach(key => {
        const page = workingInfoPages[key];
        const card = document.createElement("div");
        card.className = "admin-card";
        card.innerHTML = `
            <div class="admin-card-info">
                <div class="admin-card-title">${page.title}</div>
                <div class="admin-card-meta">Tab key: ${key}</div>
            </div>
            <div class="admin-card-actions">
                <button data-edit-infopage="${key}">Edit</button>
                <button class="delete-btn" data-delete-infopage="${key}">Delete</button>
            </div>
        `;
        list.appendChild(card);
    });
}

function infoPageModal(key) {
    const existing = key ? workingInfoPages[key] : null;
    const bodyHtml = `
        ${selectRow("field-ip-tab", "Tab Key", allTabOptions(), key || "")}
        ${fieldRow("field-ip-title", "Title", existing ? existing.title : "")}
        ${fieldRow("field-ip-body", "Body (HTML)", existing ? existing.body : "", "textarea")}
    `;

    openModal(existing ? "Edit Info Page" : "Add Info Page", bodyHtml, () => {
        const tab = document.getElementById("field-ip-tab").value;
        const title = document.getElementById("field-ip-title").value.trim();
        const body = document.getElementById("field-ip-body").value;

        if (!tab || !title) { alert("Tab key and title are required."); return false; }

        if (key && key !== tab) delete workingInfoPages[key];
        workingInfoPages[tab] = { title, body };
        renderInfoPagesList();
    });
}

document.getElementById("infopages-list").addEventListener("click", e => {
    const editBtn = e.target.closest("[data-edit-infopage]");
    const deleteBtn = e.target.closest("[data-delete-infopage]");

    if (editBtn) {
        infoPageModal(editBtn.dataset.editInfopage);
    } else if (deleteBtn) {
        const key = deleteBtn.dataset.deleteInfopage;
        if (confirm("Delete this info page?")) {
            delete workingInfoPages[key];
            renderInfoPagesList();
        }
    }
});

document.querySelector('[data-add="infopage"]').addEventListener("click", () => infoPageModal(null));

/* ── Export ── */
function jsStringify(value, indent = 0) {
    const pad = "    ".repeat(indent);
    const padInner = "    ".repeat(indent + 1);

    if (Array.isArray(value)) {
        if (value.length === 0) return "[]";
        const items = value.map(v => padInner + jsStringify(v, indent + 1)).join(",\n");
        return `[\n${items}\n${pad}]`;
    }

    if (value && typeof value === "object") {
        const keys = Object.keys(value);
        if (keys.length === 0) return "{}";
        const entries = keys.map(k => `${padInner}${k}: ${jsStringify(value[k], indent + 1)}`).join(",\n");
        return `{\n${entries}\n${pad}}`;
    }

    if (typeof value === "string") {
        if (value.includes("\n") || value.includes("`")) {
            return "`" + value.replace(/\\/g, "\\\\").replace(/`/g, "\\`") + "`";
        }
        return JSON.stringify(value);
    }

    return JSON.stringify(value);
}

function buildDataJsContent() {
    return `/*
 * data.js
 * -----------------------------------------------------------------------
 * Single source of truth for the Help Hub's navigation and content.
 * Generated/exported by admin.html. Replace the project's data.js with
 * this file to publish your changes to the live site.
 * -----------------------------------------------------------------------
 */

const menuStructure = ${jsStringify(workingMenuStructure)};

const data = ${jsStringify(workingData)};

const submenuData = ${jsStringify(workingSubmenuData)};

const infoPages = ${jsStringify(workingInfoPages)};
`;
}

document.getElementById("export-btn").addEventListener("click", () => {
    const content = buildDataJsContent();
    const blob = new Blob([content], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

/* ── Initial render ── */
renderMenuList();
renderTasksList();
renderSubmenuList();
renderInfoPagesList();
