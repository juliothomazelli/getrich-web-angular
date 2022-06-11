export class DateUtils {
  public static timeStamp(){
    return Date.now();
  }
  
  public static timestampToDate(timestamp : number){
    return new Date(timestamp);
  }

  public static dateToTimestamp(date : string){
    let splitDate : any = date.split("-");

    let splitTime = splitDate[2].substring(splitDate[2].indexOf('Z'), 3).split(":");

    return new Date(splitDate[0], splitDate[1], splitDate[2].substring(0, 2), splitTime[0], splitTime[1], splitTime[2].substring(0, 2), splitTime[2].substring(splitTime[2].indexOf('.') + 1, splitTime[2].length)).getTime();
  }
}