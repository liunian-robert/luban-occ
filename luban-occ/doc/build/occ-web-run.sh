path="/var/www/lubandev/webapps4lubanocc/source";


process="luban-occ-web-0.0.1-SNAPSHOT.jar";


pid=`(ps -ef | grep "$process" | grep -v "grep") | awk '{print $2}'`;
kill -9 $pid

cd $path/luban-occ/luban-occ-web
git pull

sleep 2

mvn clean install

cd $path/luban-occ/luban-occ-web/target

sleep 2

nohup java -jar -Xms1024M -Xmx2048M -server -Dcom.lubansoft.app.log.dir=/var/www/lubandev/webapps4lubanocc/logs/ -Ddisconf.conf=/var/www/lubandev/webapps4lubanocc/config/disconf.properties  -Dserver.port=8090 -Dserver.servlet.context-path=/lubanocc/web -Dfile.encoding=utf-8  luban-occ-web-0.0.1-SNAPSHOT.jar > /var/www/lubandev/webapps4lubanocc/logs/occ/web/web-log.out 2>&1 & tail -f /var/www/lubandev/webapps4lubanocc/logs/occ/web/web-log.out
