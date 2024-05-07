export default function getRoute({ template, params }, ...args) {
    return params.reduce((result, param, index) => result.replace(param, args[index]), template);
}
