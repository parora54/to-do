import { format, formatDistance, formatRelative, subDays } from 'date-fns'

export default class ToDo {
    constructor(id, title, desc, dueDate, priority, notes, project) {
        this._id = id
        this._title = title;
        this._desc = desc;
        this._dueDate = dueDate;
        this._priority = priority;
        this._notes = notes;
        this._finished = false;
        this._project = project;
    }

    // Getter and Setter for title
    get id() {
        return this._id;
    }

    // Getter and Setter for title
    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    // Getter and Setter for desc
    get desc() {
        return this._desc;
    }

    set desc(value) {
        this._desc = value;
    }

    // Getter and Setter for dueDate
    get dueDate() {
        return this._dueDate;
    }

    set dueDate(value) {
        this._dueDate = value;
    }

    // Getter and Setter for priority
    get priority() {
        return this._priority;
    }

    set priority(value) {
        this._priority = value;
    }

    // Getter and Setter for notes
    get notes() {
        return this._notes;
    }

    set notes(value) {
        this._notes = value;
    }

    // Getter and Setter for finished
    get finished() {
        return this._finished;
    }

    set finished(value) {
        this._finished = value;
    }

    // Getter and Setter for project
    get project() {
        return this._project;
    }

    set project(value) {
        this._project = value;
    }
}