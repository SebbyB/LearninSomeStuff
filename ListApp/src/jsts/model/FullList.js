import ListItem from "./ListItem.js";
export default class FullList {
    constructor(_list = []) {
        this._list = _list;
    }
    set list(list) { this._list = FullList.instance._list; }
    get list() {
        return this._list;
    }
    load() {
        const storedList = localStorage.getItem("myList");
        if (typeof storedList !== "string")
            return;
        const parsedList = JSON.parse(storedList);
        parsedList.forEach(item => {
            const newListItem = new ListItem(item._id, item._item, item._checked);
            FullList.instance.addItem(newListItem);
        });
    }
    save() {
        localStorage.setItem("myList", JSON.stringify(this._list));
    }
    clear() {
        this._list = [];
        this.save();
    }
    addItem(item) {
        this._list.push(item);
        this.save();
    }
    removeItem(id) {
        this._list = this._list.filter(item => (item.id !== id));
        this.save();
    }
}
FullList.instance = new FullList();
