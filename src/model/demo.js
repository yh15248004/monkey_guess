var aaa = ['dsada','a'];
  process.stdout.write('please input: ');

  //process.stdout.write(aaa);
  // process.stdin.resume();
  // var aaa = ['dsada','a'];
  // process.stdout.write(aaa);
  // process.stdin.setEncoding('utf-8');
  process.stdin.on('data', function(data) {
    aaa.push(data);

    process.stdout.write(aaa);
    process.stdin.pause();
    //callback(chunk);
  });
