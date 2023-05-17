export default function Occupied(row, column, figures) {
    let isOccupied = figures.find(fig => fig.row === row && fig.column === column)
    if(isOccupied){
        return true;
    }else{
        return false;
    }
}
