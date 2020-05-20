import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class AppMesh extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: AppMesh.Types.ClientConfiguration)
  config: Config & AppMesh.Types.ClientConfiguration;
  /**
   * Creates a service mesh.
          A service mesh is a logical boundary for network traffic between services that are
         represented by resources within the mesh. After you create your service mesh, you can
         create virtual services, virtual nodes, virtual routers, and routes to distribute traffic
         between the applications in your mesh.
         For more information about service meshes, see Service meshes.
   */
  createMesh(params: AppMesh.Types.CreateMeshInput, callback?: (err: AWSError, data: AppMesh.Types.CreateMeshOutput) => void): Request<AppMesh.Types.CreateMeshOutput, AWSError>;
  /**
   * Creates a service mesh.
          A service mesh is a logical boundary for network traffic between services that are
         represented by resources within the mesh. After you create your service mesh, you can
         create virtual services, virtual nodes, virtual routers, and routes to distribute traffic
         between the applications in your mesh.
         For more information about service meshes, see Service meshes.
   */
  createMesh(callback?: (err: AWSError, data: AppMesh.Types.CreateMeshOutput) => void): Request<AppMesh.Types.CreateMeshOutput, AWSError>;
  /**
   * Creates a route that is associated with a virtual router.
          You can route several different protocols and define a retry policy for a route.
         Traffic can be routed to one or more virtual nodes.
         For more information about routes, see Routes.
   */
  createRoute(params: AppMesh.Types.CreateRouteInput, callback?: (err: AWSError, data: AppMesh.Types.CreateRouteOutput) => void): Request<AppMesh.Types.CreateRouteOutput, AWSError>;
  /**
   * Creates a route that is associated with a virtual router.
          You can route several different protocols and define a retry policy for a route.
         Traffic can be routed to one or more virtual nodes.
         For more information about routes, see Routes.
   */
  createRoute(callback?: (err: AWSError, data: AppMesh.Types.CreateRouteOutput) => void): Request<AppMesh.Types.CreateRouteOutput, AWSError>;
  /**
   * Creates a virtual node within a service mesh.
          A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS
         service or a Kubernetes deployment. When you create a virtual node, you can specify the
         service discovery information for your task group, and whether the proxy running in a task
         group will communicate with other proxies using Transport Layer Security (TLS).
         You define a listener for any inbound traffic that your virtual node
         expects. Any virtual service that your virtual node expects to communicate to is specified
         as a backend.
         The response metadata for your new virtual node contains the arn that is
         associated with the virtual node. Set this value (either the full ARN or the truncated
         resource name: for example, mesh/default/virtualNode/simpleapp) as the
            APPMESH_VIRTUAL_NODE_NAME environment variable for your task group's Envoy
         proxy container in your task definition or pod spec. This is then mapped to the
            node.id and node.cluster Envoy parameters.
         
            If you require your Envoy stats or tracing to use a different name, you can override
            the node.cluster value that is set by
               APPMESH_VIRTUAL_NODE_NAME with the
               APPMESH_VIRTUAL_NODE_CLUSTER environment variable.
         
         For more information about virtual nodes, see Virtual nodes.
   */
  createVirtualNode(params: AppMesh.Types.CreateVirtualNodeInput, callback?: (err: AWSError, data: AppMesh.Types.CreateVirtualNodeOutput) => void): Request<AppMesh.Types.CreateVirtualNodeOutput, AWSError>;
  /**
   * Creates a virtual node within a service mesh.
          A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS
         service or a Kubernetes deployment. When you create a virtual node, you can specify the
         service discovery information for your task group, and whether the proxy running in a task
         group will communicate with other proxies using Transport Layer Security (TLS).
         You define a listener for any inbound traffic that your virtual node
         expects. Any virtual service that your virtual node expects to communicate to is specified
         as a backend.
         The response metadata for your new virtual node contains the arn that is
         associated with the virtual node. Set this value (either the full ARN or the truncated
         resource name: for example, mesh/default/virtualNode/simpleapp) as the
            APPMESH_VIRTUAL_NODE_NAME environment variable for your task group's Envoy
         proxy container in your task definition or pod spec. This is then mapped to the
            node.id and node.cluster Envoy parameters.
         
            If you require your Envoy stats or tracing to use a different name, you can override
            the node.cluster value that is set by
               APPMESH_VIRTUAL_NODE_NAME with the
               APPMESH_VIRTUAL_NODE_CLUSTER environment variable.
         
         For more information about virtual nodes, see Virtual nodes.
   */
  createVirtualNode(callback?: (err: AWSError, data: AppMesh.Types.CreateVirtualNodeOutput) => void): Request<AppMesh.Types.CreateVirtualNodeOutput, AWSError>;
  /**
   * Creates a virtual router within a service mesh.
         Specify a listener for any inbound traffic that your virtual router
         receives. Create a virtual router for each protocol and port that you need to route.
         Virtual routers handle traffic for one or more virtual services within your mesh. After you
         create your virtual router, create and associate routes for your virtual router that direct
         incoming requests to different virtual nodes.
         For more information about virtual routers, see Virtual routers.
   */
  createVirtualRouter(params: AppMesh.Types.CreateVirtualRouterInput, callback?: (err: AWSError, data: AppMesh.Types.CreateVirtualRouterOutput) => void): Request<AppMesh.Types.CreateVirtualRouterOutput, AWSError>;
  /**
   * Creates a virtual router within a service mesh.
         Specify a listener for any inbound traffic that your virtual router
         receives. Create a virtual router for each protocol and port that you need to route.
         Virtual routers handle traffic for one or more virtual services within your mesh. After you
         create your virtual router, create and associate routes for your virtual router that direct
         incoming requests to different virtual nodes.
         For more information about virtual routers, see Virtual routers.
   */
  createVirtualRouter(callback?: (err: AWSError, data: AppMesh.Types.CreateVirtualRouterOutput) => void): Request<AppMesh.Types.CreateVirtualRouterOutput, AWSError>;
  /**
   * Creates a virtual service within a service mesh.
         A virtual service is an abstraction of a real service that is provided by a virtual node
         directly or indirectly by means of a virtual router. Dependent services call your virtual
         service by its virtualServiceName, and those requests are routed to the
         virtual node or virtual router that is specified as the provider for the virtual
         service.
         For more information about virtual services, see Virtual services.
   */
  createVirtualService(params: AppMesh.Types.CreateVirtualServiceInput, callback?: (err: AWSError, data: AppMesh.Types.CreateVirtualServiceOutput) => void): Request<AppMesh.Types.CreateVirtualServiceOutput, AWSError>;
  /**
   * Creates a virtual service within a service mesh.
         A virtual service is an abstraction of a real service that is provided by a virtual node
         directly or indirectly by means of a virtual router. Dependent services call your virtual
         service by its virtualServiceName, and those requests are routed to the
         virtual node or virtual router that is specified as the provider for the virtual
         service.
         For more information about virtual services, see Virtual services.
   */
  createVirtualService(callback?: (err: AWSError, data: AppMesh.Types.CreateVirtualServiceOutput) => void): Request<AppMesh.Types.CreateVirtualServiceOutput, AWSError>;
  /**
   * Deletes an existing service mesh.
         You must delete all resources (virtual services, routes, virtual routers, and virtual
         nodes) in the service mesh before you can delete the mesh itself.
   */
  deleteMesh(params: AppMesh.Types.DeleteMeshInput, callback?: (err: AWSError, data: AppMesh.Types.DeleteMeshOutput) => void): Request<AppMesh.Types.DeleteMeshOutput, AWSError>;
  /**
   * Deletes an existing service mesh.
         You must delete all resources (virtual services, routes, virtual routers, and virtual
         nodes) in the service mesh before you can delete the mesh itself.
   */
  deleteMesh(callback?: (err: AWSError, data: AppMesh.Types.DeleteMeshOutput) => void): Request<AppMesh.Types.DeleteMeshOutput, AWSError>;
  /**
   * Deletes an existing route.
   */
  deleteRoute(params: AppMesh.Types.DeleteRouteInput, callback?: (err: AWSError, data: AppMesh.Types.DeleteRouteOutput) => void): Request<AppMesh.Types.DeleteRouteOutput, AWSError>;
  /**
   * Deletes an existing route.
   */
  deleteRoute(callback?: (err: AWSError, data: AppMesh.Types.DeleteRouteOutput) => void): Request<AppMesh.Types.DeleteRouteOutput, AWSError>;
  /**
   * Deletes an existing virtual node.
         You must delete any virtual services that list a virtual node as a service provider
         before you can delete the virtual node itself.
   */
  deleteVirtualNode(params: AppMesh.Types.DeleteVirtualNodeInput, callback?: (err: AWSError, data: AppMesh.Types.DeleteVirtualNodeOutput) => void): Request<AppMesh.Types.DeleteVirtualNodeOutput, AWSError>;
  /**
   * Deletes an existing virtual node.
         You must delete any virtual services that list a virtual node as a service provider
         before you can delete the virtual node itself.
   */
  deleteVirtualNode(callback?: (err: AWSError, data: AppMesh.Types.DeleteVirtualNodeOutput) => void): Request<AppMesh.Types.DeleteVirtualNodeOutput, AWSError>;
  /**
   * Deletes an existing virtual router.
         You must delete any routes associated with the virtual router before you can delete the
         router itself.
   */
  deleteVirtualRouter(params: AppMesh.Types.DeleteVirtualRouterInput, callback?: (err: AWSError, data: AppMesh.Types.DeleteVirtualRouterOutput) => void): Request<AppMesh.Types.DeleteVirtualRouterOutput, AWSError>;
  /**
   * Deletes an existing virtual router.
         You must delete any routes associated with the virtual router before you can delete the
         router itself.
   */
  deleteVirtualRouter(callback?: (err: AWSError, data: AppMesh.Types.DeleteVirtualRouterOutput) => void): Request<AppMesh.Types.DeleteVirtualRouterOutput, AWSError>;
  /**
   * Deletes an existing virtual service.
   */
  deleteVirtualService(params: AppMesh.Types.DeleteVirtualServiceInput, callback?: (err: AWSError, data: AppMesh.Types.DeleteVirtualServiceOutput) => void): Request<AppMesh.Types.DeleteVirtualServiceOutput, AWSError>;
  /**
   * Deletes an existing virtual service.
   */
  deleteVirtualService(callback?: (err: AWSError, data: AppMesh.Types.DeleteVirtualServiceOutput) => void): Request<AppMesh.Types.DeleteVirtualServiceOutput, AWSError>;
  /**
   * Describes an existing service mesh.
   */
  describeMesh(params: AppMesh.Types.DescribeMeshInput, callback?: (err: AWSError, data: AppMesh.Types.DescribeMeshOutput) => void): Request<AppMesh.Types.DescribeMeshOutput, AWSError>;
  /**
   * Describes an existing service mesh.
   */
  describeMesh(callback?: (err: AWSError, data: AppMesh.Types.DescribeMeshOutput) => void): Request<AppMesh.Types.DescribeMeshOutput, AWSError>;
  /**
   * Describes an existing route.
   */
  describeRoute(params: AppMesh.Types.DescribeRouteInput, callback?: (err: AWSError, data: AppMesh.Types.DescribeRouteOutput) => void): Request<AppMesh.Types.DescribeRouteOutput, AWSError>;
  /**
   * Describes an existing route.
   */
  describeRoute(callback?: (err: AWSError, data: AppMesh.Types.DescribeRouteOutput) => void): Request<AppMesh.Types.DescribeRouteOutput, AWSError>;
  /**
   * Describes an existing virtual node.
   */
  describeVirtualNode(params: AppMesh.Types.DescribeVirtualNodeInput, callback?: (err: AWSError, data: AppMesh.Types.DescribeVirtualNodeOutput) => void): Request<AppMesh.Types.DescribeVirtualNodeOutput, AWSError>;
  /**
   * Describes an existing virtual node.
   */
  describeVirtualNode(callback?: (err: AWSError, data: AppMesh.Types.DescribeVirtualNodeOutput) => void): Request<AppMesh.Types.DescribeVirtualNodeOutput, AWSError>;
  /**
   * Describes an existing virtual router.
   */
  describeVirtualRouter(params: AppMesh.Types.DescribeVirtualRouterInput, callback?: (err: AWSError, data: AppMesh.Types.DescribeVirtualRouterOutput) => void): Request<AppMesh.Types.DescribeVirtualRouterOutput, AWSError>;
  /**
   * Describes an existing virtual router.
   */
  describeVirtualRouter(callback?: (err: AWSError, data: AppMesh.Types.DescribeVirtualRouterOutput) => void): Request<AppMesh.Types.DescribeVirtualRouterOutput, AWSError>;
  /**
   * Describes an existing virtual service.
   */
  describeVirtualService(params: AppMesh.Types.DescribeVirtualServiceInput, callback?: (err: AWSError, data: AppMesh.Types.DescribeVirtualServiceOutput) => void): Request<AppMesh.Types.DescribeVirtualServiceOutput, AWSError>;
  /**
   * Describes an existing virtual service.
   */
  describeVirtualService(callback?: (err: AWSError, data: AppMesh.Types.DescribeVirtualServiceOutput) => void): Request<AppMesh.Types.DescribeVirtualServiceOutput, AWSError>;
  /**
   * Returns a list of existing service meshes.
   */
  listMeshes(params: AppMesh.Types.ListMeshesInput, callback?: (err: AWSError, data: AppMesh.Types.ListMeshesOutput) => void): Request<AppMesh.Types.ListMeshesOutput, AWSError>;
  /**
   * Returns a list of existing service meshes.
   */
  listMeshes(callback?: (err: AWSError, data: AppMesh.Types.ListMeshesOutput) => void): Request<AppMesh.Types.ListMeshesOutput, AWSError>;
  /**
   * Returns a list of existing routes in a service mesh.
   */
  listRoutes(params: AppMesh.Types.ListRoutesInput, callback?: (err: AWSError, data: AppMesh.Types.ListRoutesOutput) => void): Request<AppMesh.Types.ListRoutesOutput, AWSError>;
  /**
   * Returns a list of existing routes in a service mesh.
   */
  listRoutes(callback?: (err: AWSError, data: AppMesh.Types.ListRoutesOutput) => void): Request<AppMesh.Types.ListRoutesOutput, AWSError>;
  /**
   * List the tags for an App Mesh resource.
   */
  listTagsForResource(params: AppMesh.Types.ListTagsForResourceInput, callback?: (err: AWSError, data: AppMesh.Types.ListTagsForResourceOutput) => void): Request<AppMesh.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * List the tags for an App Mesh resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: AppMesh.Types.ListTagsForResourceOutput) => void): Request<AppMesh.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Returns a list of existing virtual nodes.
   */
  listVirtualNodes(params: AppMesh.Types.ListVirtualNodesInput, callback?: (err: AWSError, data: AppMesh.Types.ListVirtualNodesOutput) => void): Request<AppMesh.Types.ListVirtualNodesOutput, AWSError>;
  /**
   * Returns a list of existing virtual nodes.
   */
  listVirtualNodes(callback?: (err: AWSError, data: AppMesh.Types.ListVirtualNodesOutput) => void): Request<AppMesh.Types.ListVirtualNodesOutput, AWSError>;
  /**
   * Returns a list of existing virtual routers in a service mesh.
   */
  listVirtualRouters(params: AppMesh.Types.ListVirtualRoutersInput, callback?: (err: AWSError, data: AppMesh.Types.ListVirtualRoutersOutput) => void): Request<AppMesh.Types.ListVirtualRoutersOutput, AWSError>;
  /**
   * Returns a list of existing virtual routers in a service mesh.
   */
  listVirtualRouters(callback?: (err: AWSError, data: AppMesh.Types.ListVirtualRoutersOutput) => void): Request<AppMesh.Types.ListVirtualRoutersOutput, AWSError>;
  /**
   * Returns a list of existing virtual services in a service mesh.
   */
  listVirtualServices(params: AppMesh.Types.ListVirtualServicesInput, callback?: (err: AWSError, data: AppMesh.Types.ListVirtualServicesOutput) => void): Request<AppMesh.Types.ListVirtualServicesOutput, AWSError>;
  /**
   * Returns a list of existing virtual services in a service mesh.
   */
  listVirtualServices(callback?: (err: AWSError, data: AppMesh.Types.ListVirtualServicesOutput) => void): Request<AppMesh.Types.ListVirtualServicesOutput, AWSError>;
  /**
   * Associates the specified tags to a resource with the specified resourceArn.
         If existing tags on a resource aren't specified in the request parameters, they aren't
         changed. When a resource is deleted, the tags associated with that resource are also
         deleted.
   */
  tagResource(params: AppMesh.Types.TagResourceInput, callback?: (err: AWSError, data: AppMesh.Types.TagResourceOutput) => void): Request<AppMesh.Types.TagResourceOutput, AWSError>;
  /**
   * Associates the specified tags to a resource with the specified resourceArn.
         If existing tags on a resource aren't specified in the request parameters, they aren't
         changed. When a resource is deleted, the tags associated with that resource are also
         deleted.
   */
  tagResource(callback?: (err: AWSError, data: AppMesh.Types.TagResourceOutput) => void): Request<AppMesh.Types.TagResourceOutput, AWSError>;
  /**
   * Deletes specified tags from a resource.
   */
  untagResource(params: AppMesh.Types.UntagResourceInput, callback?: (err: AWSError, data: AppMesh.Types.UntagResourceOutput) => void): Request<AppMesh.Types.UntagResourceOutput, AWSError>;
  /**
   * Deletes specified tags from a resource.
   */
  untagResource(callback?: (err: AWSError, data: AppMesh.Types.UntagResourceOutput) => void): Request<AppMesh.Types.UntagResourceOutput, AWSError>;
  /**
   * Updates an existing service mesh.
   */
  updateMesh(params: AppMesh.Types.UpdateMeshInput, callback?: (err: AWSError, data: AppMesh.Types.UpdateMeshOutput) => void): Request<AppMesh.Types.UpdateMeshOutput, AWSError>;
  /**
   * Updates an existing service mesh.
   */
  updateMesh(callback?: (err: AWSError, data: AppMesh.Types.UpdateMeshOutput) => void): Request<AppMesh.Types.UpdateMeshOutput, AWSError>;
  /**
   * Updates an existing route for a specified service mesh and virtual router.
   */
  updateRoute(params: AppMesh.Types.UpdateRouteInput, callback?: (err: AWSError, data: AppMesh.Types.UpdateRouteOutput) => void): Request<AppMesh.Types.UpdateRouteOutput, AWSError>;
  /**
   * Updates an existing route for a specified service mesh and virtual router.
   */
  updateRoute(callback?: (err: AWSError, data: AppMesh.Types.UpdateRouteOutput) => void): Request<AppMesh.Types.UpdateRouteOutput, AWSError>;
  /**
   * Updates an existing virtual node in a specified service mesh.
   */
  updateVirtualNode(params: AppMesh.Types.UpdateVirtualNodeInput, callback?: (err: AWSError, data: AppMesh.Types.UpdateVirtualNodeOutput) => void): Request<AppMesh.Types.UpdateVirtualNodeOutput, AWSError>;
  /**
   * Updates an existing virtual node in a specified service mesh.
   */
  updateVirtualNode(callback?: (err: AWSError, data: AppMesh.Types.UpdateVirtualNodeOutput) => void): Request<AppMesh.Types.UpdateVirtualNodeOutput, AWSError>;
  /**
   * Updates an existing virtual router in a specified service mesh.
   */
  updateVirtualRouter(params: AppMesh.Types.UpdateVirtualRouterInput, callback?: (err: AWSError, data: AppMesh.Types.UpdateVirtualRouterOutput) => void): Request<AppMesh.Types.UpdateVirtualRouterOutput, AWSError>;
  /**
   * Updates an existing virtual router in a specified service mesh.
   */
  updateVirtualRouter(callback?: (err: AWSError, data: AppMesh.Types.UpdateVirtualRouterOutput) => void): Request<AppMesh.Types.UpdateVirtualRouterOutput, AWSError>;
  /**
   * Updates an existing virtual service in a specified service mesh.
   */
  updateVirtualService(params: AppMesh.Types.UpdateVirtualServiceInput, callback?: (err: AWSError, data: AppMesh.Types.UpdateVirtualServiceOutput) => void): Request<AppMesh.Types.UpdateVirtualServiceOutput, AWSError>;
  /**
   * Updates an existing virtual service in a specified service mesh.
   */
  updateVirtualService(callback?: (err: AWSError, data: AppMesh.Types.UpdateVirtualServiceOutput) => void): Request<AppMesh.Types.UpdateVirtualServiceOutput, AWSError>;
}
declare namespace AppMesh {
  export interface VirtualRouterListener {
    portMapping: PortMapping;
  }
  export type VirtualRouterStatusCode = "ACTIVE"|"DELETED"|"INACTIVE"|string;
  export type TagKeyList = TagKey[];
  export interface GrpcRetryPolicy {
    /**
     * Specify at least one of the valid values.
     */
    grpcRetryEvents?: GrpcRetryPolicyEvents;
    /**
     * Specify at least one of the following values. 
         
            
               
                  server-error – HTTP status codes 500, 501,
                  502, 503, 504, 505, 506, 507, 508, 510, and 511
            
            
               
                  gateway-error – HTTP status codes 502,
                  503, and 504
            
            
               
                  client-error – HTTP status code 409
            
            
               
                  stream-error – Retry on refused
                  stream
            
         
     */
    httpRetryEvents?: HttpRetryPolicyEvents;
    /**
     * The maximum number of retry attempts.
     */
    maxRetries: MaxRetries;
    /**
     * An object that represents a duration of time.
     */
    perRetryTimeout: Duration;
    /**
     * Specify a valid value.
     */
    tcpRetryEvents?: TcpRetryPolicyEvents;
  }
  export interface CreateVirtualNodeOutput {
    /**
     * The full description of your virtual node following the create call.
     */
    virtualNode: VirtualNodeData;
  }
  export interface Logging {
    /**
     * The access log configuration for a virtual node.
     */
    accessLog?: AccessLog;
  }
  export type Long = number;
  export interface UpdateVirtualRouterOutput {
    /**
     * A full description of the virtual router that was updated.
     */
    virtualRouter: VirtualRouterData;
  }
  export interface ListVirtualRoutersOutput {
    /**
     * The nextToken value to include in a future ListVirtualRouters
         request. When the results of a ListVirtualRouters request exceed
            limit, you can use this value to retrieve the next page of results. This
         value is null when there are no more results to return.
     */
    nextToken?: String;
    /**
     * The list of existing virtual routers for the specified service mesh.
     */
    virtualRouters: VirtualRouterList;
  }
  export interface ResourceMetadata {
    /**
     * The full Amazon Resource Name (ARN) for the resource.
     */
    arn: Arn;
    /**
     * The Unix epoch timestamp in seconds for when the resource was created.
     */
    createdAt: Timestamp;
    /**
     * The Unix epoch timestamp in seconds for when the resource was last updated.
     */
    lastUpdatedAt: Timestamp;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner: AccountId;
    /**
     * The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
               the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see Working with Shared Meshes.
     */
    resourceOwner: AccountId;
    /**
     * The unique identifier for the resource.
     */
    uid: String;
    /**
     * The version of the resource. Resources are created at version 1, and this version is
         incremented each time that they're updated.
     */
    version: Long;
  }
  export interface UpdateVirtualNodeOutput {
    /**
     * A full description of the virtual node that was updated.
     */
    virtualNode: VirtualNodeData;
  }
  export interface ListRoutesOutput {
    /**
     * The nextToken value to include in a future ListRoutes request.
         When the results of a ListRoutes request exceed limit, you can
         use this value to retrieve the next page of results. This value is null when
         there are no more results to return.
     */
    nextToken?: String;
    /**
     * The list of existing routes for the specified service mesh and virtual router.
     */
    routes: RouteList;
  }
  export interface VirtualServiceBackend {
    /**
     * A reference to an object that represents the client policy for a backend.
     */
    clientPolicy?: ClientPolicy;
    /**
     * The name of the virtual service that is acting as a virtual node backend.
     */
    virtualServiceName: ServiceName;
  }
  export type GrpcRouteMetadataList = GrpcRouteMetadata[];
  export type ListenerTlsMode = "DISABLED"|"PERMISSIVE"|"STRICT"|string;
  export interface HealthCheckPolicy {
    /**
     * The number of consecutive successful health checks that must occur before declaring
         listener healthy.
     */
    healthyThreshold: HealthCheckThreshold;
    /**
     * The time period in milliseconds between each health check execution.
     */
    intervalMillis: HealthCheckIntervalMillis;
    /**
     * The destination path for the health check request. This value is only used if the
         specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.
     */
    path?: String;
    /**
     * The destination port for the health check request. This port must match the port defined
         in the PortMapping for the listener.
     */
    port?: PortNumber;
    /**
     * The protocol for the health check request. If you specify grpc, then your
         service must conform to the GRPC Health
            Checking Protocol.
     */
    protocol: PortProtocol;
    /**
     * The amount of time to wait when receiving a response from the health check, in
         milliseconds.
     */
    timeoutMillis: HealthCheckTimeoutMillis;
    /**
     * The number of consecutive failed health checks that must occur before declaring a
         virtual node unhealthy. 
     */
    unhealthyThreshold: HealthCheckThreshold;
  }
  export interface EgressFilter {
    /**
     * The egress filter type. By default, the type is DROP_ALL, which allows
         egress only from virtual nodes to other defined resources in the service mesh (and any
         traffic to *.amazonaws.com for AWS API calls). You can set the egress filter
         type to ALLOW_ALL to allow egress to any endpoint inside or outside of the
         service mesh.
     */
    type: EgressFilterType;
  }
  export type VirtualServiceList = VirtualServiceRef[];
  export interface ClientPolicy {
    /**
     * A reference to an object that represents a Transport Layer Security (TLS) client policy.
     */
    tls?: ClientPolicyTls;
  }
  export type Boolean = boolean;
  export type HttpRetryPolicyEvent = string;
  export interface DescribeVirtualServiceOutput {
    /**
     * The full description of your virtual service.
     */
    virtualService: VirtualServiceData;
  }
  export type CertificateAuthorityArns = Arn[];
  export interface DescribeVirtualNodeOutput {
    /**
     * The full description of your virtual node.
     */
    virtualNode: VirtualNodeData;
  }
  export type AwsCloudMapName = string;
  export interface CreateRouteOutput {
    /**
     * The full description of your mesh following the create call.
     */
    route: RouteData;
  }
  export interface DnsServiceDiscovery {
    /**
     * Specifies the DNS service discovery hostname for the virtual node. 
     */
    hostname: Hostname;
  }
  export interface DeleteRouteInput {
    /**
     * The name of the service mesh to delete the route in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The name of the route to delete.
     */
    routeName: ResourceName;
    /**
     * The name of the virtual router to delete the route in.
     */
    virtualRouterName: ResourceName;
  }
  export interface VirtualNodeData {
    /**
     * The name of the service mesh that the virtual node resides in.
     */
    meshName: ResourceName;
    /**
     * The associated metadata for the virtual node.
     */
    metadata: ResourceMetadata;
    /**
     * The specifications of the virtual node.
     */
    spec: VirtualNodeSpec;
    /**
     * The current status for the virtual node.
     */
    status: VirtualNodeStatus;
    /**
     * The name of the virtual node.
     */
    virtualNodeName: ResourceName;
  }
  export interface UntagResourceOutput {
  }
  export type TcpRetryPolicyEvent = "connection-error"|string;
  export interface Backend {
    /**
     * Specifies a virtual service to use as a backend for a virtual node. 
     */
    virtualService?: VirtualServiceBackend;
  }
  export interface ListMeshesInput {
    /**
     * The maximum number of results returned by ListMeshes in paginated output.
         When you use this parameter, ListMeshes returns only limit
         results in a single page along with a nextToken response element. You can see
         the remaining results of the initial request by sending another ListMeshes
         request with the returned nextToken value. This value can be between
         1 and 100. If you don't use this parameter,
            ListMeshes returns up to 100 results and a
            nextToken value if applicable.
     */
    limit?: ListMeshesLimit;
    /**
     * The nextToken value returned from a previous paginated
            ListMeshes request where limit was used and the results
         exceeded the value of that parameter. Pagination continues from the end of the previous
         results that returned the nextToken value. 
         
            This token should be treated as an opaque identifier that is used only to
                retrieve the next items in a list and not for other programmatic purposes.
        
     */
    nextToken?: String;
  }
  export interface VirtualRouterData {
    /**
     * The name of the service mesh that the virtual router resides in.
     */
    meshName: ResourceName;
    /**
     * The associated metadata for the virtual router.
     */
    metadata: ResourceMetadata;
    /**
     * The specifications of the virtual router.
     */
    spec: VirtualRouterSpec;
    /**
     * The current status of the virtual router.
     */
    status: VirtualRouterStatus;
    /**
     * The name of the virtual router.
     */
    virtualRouterName: ResourceName;
  }
  export interface UpdateMeshInput {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: String;
    /**
     * The name of the service mesh to update.
     */
    meshName: ResourceName;
    /**
     * The service mesh specification to apply.
     */
    spec?: MeshSpec;
  }
  export interface CreateVirtualRouterInput {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: String;
    /**
     * The name of the service mesh to create the virtual router in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
               the account that you specify must share the mesh with your account before you can create 
             the resource in the service mesh. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The virtual router specification to apply.
     */
    spec: VirtualRouterSpec;
    /**
     * Optional metadata that you can apply to the virtual router to assist with categorization
         and organization. Each tag consists of a key and an optional value, both of which you
         define. Tag keys can have a maximum character length of 128 characters, and tag values can have
            a maximum length of 256 characters.
     */
    tags?: TagList;
    /**
     * The name to use for the virtual router.
     */
    virtualRouterName: ResourceName;
  }
  export interface DescribeVirtualRouterOutput {
    /**
     * The full description of your virtual router.
     */
    virtualRouter: VirtualRouterData;
  }
  export interface CreateMeshOutput {
    /**
     * The full description of your service mesh following the create call.
     */
    mesh: MeshData;
  }
  export interface CreateVirtualRouterOutput {
    /**
     * The full description of your virtual router following the create call.
     */
    virtualRouter: VirtualRouterData;
  }
  export interface VirtualServiceStatus {
    /**
     * The current status of the virtual service.
     */
    status: VirtualServiceStatusCode;
  }
  export type HttpRetryPolicyEvents = HttpRetryPolicyEvent[];
  export interface ListenerTlsCertificate {
    /**
     * A reference to an object that represents an AWS Certicate Manager (ACM) certificate.
     */
    acm?: ListenerTlsAcmCertificate;
    /**
     * A reference to an object that represents a local file certificate.
     */
    file?: ListenerTlsFileCertificate;
  }
  export type ListMeshesLimit = number;
  export type AwsCloudMapInstanceAttributeKey = string;
  export interface VirtualRouterSpec {
    /**
     * The listeners that the virtual router is expected to receive inbound traffic from. You
         can specify one listener.
     */
    listeners?: VirtualRouterListeners;
  }
  export interface VirtualNodeSpec {
    /**
     * A reference to an object that represents the defaults for backends.
     */
    backendDefaults?: BackendDefaults;
    /**
     * The backends that the virtual node is expected to send outbound traffic to.
     */
    backends?: Backends;
    /**
     * The listener that the virtual node is expected to receive inbound traffic from. You can
         specify one listener.
     */
    listeners?: Listeners;
    /**
     * The inbound and outbound access logging information for the virtual node.
     */
    logging?: Logging;
    /**
     * The service discovery information for the virtual node. If your virtual node does not
         expect ingress traffic, you can omit this parameter. If you specify a
         listener, then you must specify service discovery information.
     */
    serviceDiscovery?: ServiceDiscovery;
  }
  export interface ListMeshesOutput {
    /**
     * The list of existing service meshes.
     */
    meshes: MeshList;
    /**
     * The nextToken value to include in a future ListMeshes request.
         When the results of a ListMeshes request exceed limit, you can
         use this value to retrieve the next page of results. This value is null when
         there are no more results to return.
     */
    nextToken?: String;
  }
  export type VirtualRouterListeners = VirtualRouterListener[];
  export type PortSet = PortNumber[];
  export type HttpMethod = "CONNECT"|"DELETE"|"GET"|"HEAD"|"OPTIONS"|"PATCH"|"POST"|"PUT"|"TRACE"|string;
  export type MeshList = MeshRef[];
  export type MaxRetries = number;
  export interface TlsValidationContextTrust {
    /**
     * A reference to an object that represents a TLS validation context trust for an AWS Certicate Manager (ACM)
         certificate.
     */
    acm?: TlsValidationContextAcmTrust;
    /**
     * An object that represents a TLS validation context trust for a local file.
     */
    file?: TlsValidationContextFileTrust;
  }
  export interface PortMapping {
    /**
     * The port used for the port mapping.
     */
    port: PortNumber;
    /**
     * The protocol used for the port mapping. Specify one protocol.
     */
    protocol: PortProtocol;
  }
  export interface ListVirtualServicesOutput {
    /**
     * The nextToken value to include in a future ListVirtualServices
         request. When the results of a ListVirtualServices request exceed
            limit, you can use this value to retrieve the next page of results. This
         value is null when there are no more results to return.
     */
    nextToken?: String;
    /**
     * The list of existing virtual services for the specified service mesh.
     */
    virtualServices: VirtualServiceList;
  }
  export type AwsCloudMapInstanceAttributeValue = string;
  export interface WeightedTarget {
    /**
     * The virtual node to associate with the weighted target.
     */
    virtualNode: ResourceName;
    /**
     * The relative weight of the weighted target.
     */
    weight: PercentInt;
  }
  export interface RouteRef {
    /**
     * The full Amazon Resource Name (ARN) for the route.
     */
    arn: Arn;
    createdAt: Timestamp;
    lastUpdatedAt: Timestamp;
    /**
     * The name of the service mesh that the route resides in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner: AccountId;
    /**
     * The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
               the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see Working with Shared Meshes.
     */
    resourceOwner: AccountId;
    /**
     * The name of the route.
     */
    routeName: ResourceName;
    version: Long;
    /**
     * The virtual router that the route is associated with.
     */
    virtualRouterName: ResourceName;
  }
  export interface DeleteVirtualNodeInput {
    /**
     * The name of the service mesh to delete the virtual node in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The name of the virtual node to delete.
     */
    virtualNodeName: ResourceName;
  }
  export interface RouteData {
    /**
     * The name of the service mesh that the route resides in.
     */
    meshName: ResourceName;
    /**
     * The associated metadata for the route.
     */
    metadata: ResourceMetadata;
    /**
     * The name of the route.
     */
    routeName: ResourceName;
    /**
     * The specifications of the route.
     */
    spec: RouteSpec;
    /**
     * The status of the route.
     */
    status: RouteStatus;
    /**
     * The virtual router that the route is associated with.
     */
    virtualRouterName: ResourceName;
  }
  export type RouteStatusCode = "ACTIVE"|"DELETED"|"INACTIVE"|string;
  export type HeaderName = string;
  export type TagList = TagRef[];
  export type GrpcRetryPolicyEvent = "cancelled"|"deadline-exceeded"|"internal"|"resource-exhausted"|"unavailable"|string;
  export interface TlsValidationContextAcmTrust {
    /**
     * One or more ACM Amazon Resource Name (ARN)s.
     */
    certificateAuthorityArns: CertificateAuthorityArns;
  }
  export interface HeaderMatchMethod {
    /**
     * The value sent by the client must match the specified value exactly.
     */
    exact?: HeaderMatch;
    /**
     * The value sent by the client must begin with the specified characters.
     */
    prefix?: HeaderMatch;
    /**
     * An object that represents the range of values to match on.
     */
    range?: MatchRange;
    /**
     * The value sent by the client must include the specified characters.
     */
    regex?: HeaderMatch;
    /**
     * The value sent by the client must end with the specified characters.
     */
    suffix?: HeaderMatch;
  }
  export interface DeleteMeshOutput {
    /**
     * The service mesh that was deleted.
     */
    mesh: MeshData;
  }
  export type EgressFilterType = "ALLOW_ALL"|"DROP_ALL"|string;
  export type DurationValue = number;
  export type Hostname = string;
  export interface TagResourceInput {
    /**
     * The Amazon Resource Name (ARN) of the resource to add tags to.
     */
    resourceArn: Arn;
    /**
     * The tags to add to the resource. A tag is an array of key-value pairs.
         Tag keys can have a maximum character length of 128 characters, and tag values can have
            a maximum length of 256 characters.
     */
    tags: TagList;
  }
  export interface VirtualServiceProvider {
    /**
     * The virtual node associated with a virtual service.
     */
    virtualNode?: VirtualNodeServiceProvider;
    /**
     * The virtual router associated with a virtual service.
     */
    virtualRouter?: VirtualRouterServiceProvider;
  }
  export interface GrpcRouteMatch {
    /**
     * An object that represents the data to match from the request.
     */
    metadata?: GrpcRouteMetadataList;
    /**
     * The method name to match from the request. If you specify a name, you must also specify
         a serviceName.
     */
    methodName?: MethodName;
    /**
     * The fully qualified domain name for the service to match from the request.
     */
    serviceName?: ServiceName;
  }
  export interface AwsCloudMapServiceDiscovery {
    /**
     * A string map that contains attributes with values that you can use to filter instances
         by any custom attribute that you specified when you registered the instance. Only instances
         that match all of the specified key/value pairs will be returned.
     */
    attributes?: AwsCloudMapInstanceAttributes;
    /**
     * The name of the AWS Cloud Map namespace to use.
     */
    namespaceName: AwsCloudMapName;
    /**
     * The name of the AWS Cloud Map service to use.
     */
    serviceName: AwsCloudMapName;
  }
  export interface UpdateVirtualServiceOutput {
    /**
     * A full description of the virtual service that was updated.
     */
    virtualService: VirtualServiceData;
  }
  export interface MeshStatus {
    /**
     * The current mesh status.
     */
    status?: MeshStatusCode;
  }
  export interface CreateVirtualNodeInput {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: String;
    /**
     * The name of the service mesh to create the virtual node in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
               the account that you specify must share the mesh with your account before you can create 
             the resource in the service mesh. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The virtual node specification to apply.
     */
    spec: VirtualNodeSpec;
    /**
     * Optional metadata that you can apply to the virtual node to assist with categorization
         and organization. Each tag consists of a key and an optional value, both of which you
         define. Tag keys can have a maximum character length of 128 characters, and tag values can have
            a maximum length of 256 characters.
     */
    tags?: TagList;
    /**
     * The name to use for the virtual node.
     */
    virtualNodeName: ResourceName;
  }
  export interface RouteSpec {
    /**
     * An object that represents the specification of a gRPC route.
     */
    grpcRoute?: GrpcRoute;
    /**
     * An object that represents the specification of an HTTP/2 route.
     */
    http2Route?: HttpRoute;
    /**
     * An object that represents the specification of an HTTP route.
     */
    httpRoute?: HttpRoute;
    /**
     * The priority for the route. Routes are matched based on the specified value, where 0 is
         the highest priority.
     */
    priority?: RoutePriority;
    /**
     * An object that represents the specification of a TCP route.
     */
    tcpRoute?: TcpRoute;
  }
  export interface CreateVirtualServiceOutput {
    /**
     * The full description of your virtual service following the create call.
     */
    virtualService: VirtualServiceData;
  }
  export interface FileAccessLog {
    /**
     * The file path to write access logs to. You can use /dev/stdout to send
         access logs to standard out and configure your Envoy container to use a log driver, such as
            awslogs, to export the access logs to a log storage service such as Amazon
         CloudWatch Logs. You can also specify a path in the Envoy container's file system to write
         the files to disk.
         
            The Envoy process must have write permissions to the path that you specify here.
            Otherwise, Envoy fails to bootstrap properly.
         
     */
    path: FilePath;
  }
  export interface VirtualRouterServiceProvider {
    /**
     * The name of the virtual router that is acting as a service provider.
     */
    virtualRouterName: ResourceName;
  }
  export interface DeleteVirtualServiceInput {
    /**
     * The name of the service mesh to delete the virtual service in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The name of the virtual service to delete.
     */
    virtualServiceName: ServiceName;
  }
  export interface TlsValidationContext {
    /**
     * A reference to an object that represents a TLS validation context trust.
     */
    trust: TlsValidationContextTrust;
  }
  export interface DeleteVirtualRouterOutput {
    /**
     * The virtual router that was deleted.
     */
    virtualRouter: VirtualRouterData;
  }
  export type TagsLimit = number;
  export interface DeleteVirtualNodeOutput {
    /**
     * The virtual node that was deleted.
     */
    virtualNode: VirtualNodeData;
  }
  export interface UpdateVirtualNodeInput {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: String;
    /**
     * The name of the service mesh that the virtual node resides in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The new virtual node specification to apply. This overwrites the existing data.
     */
    spec: VirtualNodeSpec;
    /**
     * The name of the virtual node to update.
     */
    virtualNodeName: ResourceName;
  }
  export interface ListenerTls {
    /**
     * A reference to an object that represents a listener's TLS certificate.
     */
    certificate: ListenerTlsCertificate;
    /**
     * Specify one of the following modes.
         
            
               
                  STRICT – Listener only accepts connections with TLS
               enabled. 
            
            
               
                  PERMISSIVE – Listener accepts connections with or
               without TLS enabled.
            
            
               
                  DISABLED – Listener only accepts connections without
               TLS. 
            
         
     */
    mode: ListenerTlsMode;
  }
  export interface DeleteMeshInput {
    /**
     * The name of the service mesh to delete.
     */
    meshName: ResourceName;
  }
  export type TcpRetryPolicyEvents = TcpRetryPolicyEvent[];
  export interface CreateVirtualServiceInput {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: String;
    /**
     * The name of the service mesh to create the virtual service in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
               the account that you specify must share the mesh with your account before you can create 
             the resource in the service mesh. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The virtual service specification to apply.
     */
    spec: VirtualServiceSpec;
    /**
     * Optional metadata that you can apply to the virtual service to assist with
         categorization and organization. Each tag consists of a key and an optional value, both of
         which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have
            a maximum length of 256 characters.
     */
    tags?: TagList;
    /**
     * The name to use for the virtual service.
     */
    virtualServiceName: ServiceName;
  }
  export interface UpdateVirtualRouterInput {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: String;
    /**
     * The name of the service mesh that the virtual router resides in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The new virtual router specification to apply. This overwrites the existing data.
     */
    spec: VirtualRouterSpec;
    /**
     * The name of the virtual router to update.
     */
    virtualRouterName: ResourceName;
  }
  export interface ListTagsForResourceInput {
    /**
     * The maximum number of tag results returned by ListTagsForResource in
         paginated output. When this parameter is used, ListTagsForResource returns
         only limit results in a single page along with a nextToken
         response element. You can see the remaining results of the initial request by sending
         another ListTagsForResource request with the returned nextToken
         value. This value can be between 1 and 100. If you don't use
         this parameter, ListTagsForResource returns up to 100
         results and a nextToken value if applicable.
     */
    limit?: TagsLimit;
    /**
     * The nextToken value returned from a previous paginated
            ListTagsForResource request where limit was used and the
         results exceeded the value of that parameter. Pagination continues from the end of the
         previous results that returned the nextToken value.
     */
    nextToken?: String;
    /**
     * The Amazon Resource Name (ARN) that identifies the resource to list the tags for.
     */
    resourceArn: Arn;
  }
  export type GrpcRetryPolicyEvents = GrpcRetryPolicyEvent[];
  export interface DescribeMeshOutput {
    /**
     * The full description of your service mesh.
     */
    mesh: MeshData;
  }
  export interface DeleteVirtualRouterInput {
    /**
     * The name of the service mesh to delete the virtual router in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The name of the virtual router to delete.
     */
    virtualRouterName: ResourceName;
  }
  export interface DescribeRouteInput {
    /**
     * The name of the service mesh that the route resides in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The name of the route to describe.
     */
    routeName: ResourceName;
    /**
     * The name of the virtual router that the route is associated with.
     */
    virtualRouterName: ResourceName;
  }
  export interface DeleteRouteOutput {
    /**
     * The route that was deleted.
     */
    route: RouteData;
  }
  export type Listeners = Listener[];
  export type Backends = Backend[];
  export type PortProtocol = "grpc"|"http"|"http2"|"tcp"|string;
  export type VirtualNodeStatusCode = "ACTIVE"|"DELETED"|"INACTIVE"|string;
  export type ServiceName = string;
  export interface UpdateVirtualServiceInput {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: String;
    /**
     * The name of the service mesh that the virtual service resides in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The new virtual service specification to apply. This overwrites the existing
         data.
     */
    spec: VirtualServiceSpec;
    /**
     * The name of the virtual service to update.
     */
    virtualServiceName: ServiceName;
  }
  export type HealthCheckThreshold = number;
  export interface UpdateRouteOutput {
    /**
     * A full description of the route that was updated.
     */
    route: RouteData;
  }
  export type PercentInt = number;
  export type MethodName = string;
  export type TagValue = string;
  export interface HttpRouteAction {
    /**
     * An object that represents the targets that traffic is routed to when a request matches the route.
     */
    weightedTargets: WeightedTargets;
  }
  export interface ListRoutesInput {
    /**
     * The maximum number of results returned by ListRoutes in paginated output.
         When you use this parameter, ListRoutes returns only limit
         results in a single page along with a nextToken response element. You can see
         the remaining results of the initial request by sending another ListRoutes
         request with the returned nextToken value. This value can be between
         1 and 100. If you don't use this parameter,
            ListRoutes returns up to 100 results and a
            nextToken value if applicable.
     */
    limit?: ListRoutesLimit;
    /**
     * The name of the service mesh to list routes in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The nextToken value returned from a previous paginated
            ListRoutes request where limit was used and the results
         exceeded the value of that parameter. Pagination continues from the end of the previous
         results that returned the nextToken value.
     */
    nextToken?: String;
    /**
     * The name of the virtual router to list routes in.
     */
    virtualRouterName: ResourceName;
  }
  export interface VirtualServiceRef {
    /**
     * The full Amazon Resource Name (ARN) for the virtual service.
     */
    arn: Arn;
    createdAt: Timestamp;
    lastUpdatedAt: Timestamp;
    /**
     * The name of the service mesh that the virtual service resides in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner: AccountId;
    /**
     * The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
               the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see Working with Shared Meshes.
     */
    resourceOwner: AccountId;
    version: Long;
    /**
     * The name of the virtual service.
     */
    virtualServiceName: ServiceName;
  }
  export interface VirtualNodeStatus {
    /**
     * The current status of the virtual node.
     */
    status: VirtualNodeStatusCode;
  }
  export interface VirtualRouterRef {
    /**
     * The full Amazon Resource Name (ARN) for the virtual router.
     */
    arn: Arn;
    createdAt: Timestamp;
    lastUpdatedAt: Timestamp;
    /**
     * The name of the service mesh that the virtual router resides in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner: AccountId;
    /**
     * The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
               the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see Working with Shared Meshes.
     */
    resourceOwner: AccountId;
    version: Long;
    /**
     * The name of the virtual router.
     */
    virtualRouterName: ResourceName;
  }
  export interface VirtualServiceData {
    /**
     * The name of the service mesh that the virtual service resides in.
     */
    meshName: ResourceName;
    metadata: ResourceMetadata;
    /**
     * The specifications of the virtual service.
     */
    spec: VirtualServiceSpec;
    /**
     * The current status of the virtual service.
     */
    status: VirtualServiceStatus;
    /**
     * The name of the virtual service.
     */
    virtualServiceName: ServiceName;
  }
  export interface HttpRouteHeader {
    /**
     * Specify True to match anything except the match criteria. The default value is False.
     */
    invert?: Boolean;
    /**
     * The HeaderMatchMethod object.
     */
    match?: HeaderMatchMethod;
    /**
     * A name for the HTTP header in the client request that will be matched on.
     */
    name: HeaderName;
  }
  export type FilePath = string;
  export type AwsCloudMapInstanceAttributes = AwsCloudMapInstanceAttribute[];
  export interface VirtualNodeRef {
    /**
     * The full Amazon Resource Name (ARN) for the virtual node.
     */
    arn: Arn;
    createdAt: Timestamp;
    lastUpdatedAt: Timestamp;
    /**
     * The name of the service mesh that the virtual node resides in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner: AccountId;
    /**
     * The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
               the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see Working with Shared Meshes.
     */
    resourceOwner: AccountId;
    version: Long;
    /**
     * The name of the virtual node.
     */
    virtualNodeName: ResourceName;
  }
  export interface CreateMeshInput {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: String;
    /**
     * The name to use for the service mesh.
     */
    meshName: ResourceName;
    /**
     * The service mesh specification to apply.
     */
    spec?: MeshSpec;
    /**
     * Optional metadata that you can apply to the service mesh to assist with categorization
         and organization. Each tag consists of a key and an optional value, both of which you
         define. Tag keys can have a maximum character length of 128 characters, and tag values can have
            a maximum length of 256 characters.
     */
    tags?: TagList;
  }
  export interface GrpcRouteAction {
    /**
     * An object that represents the targets that traffic is routed to when a request matches the route.
     */
    weightedTargets: WeightedTargets;
  }
  export interface UpdateMeshOutput {
    mesh: MeshData;
  }
  export interface GrpcRouteMetadataMatchMethod {
    /**
     * The value sent by the client must match the specified value exactly.
     */
    exact?: HeaderMatch;
    /**
     * The value sent by the client must begin with the specified characters.
     */
    prefix?: HeaderMatch;
    /**
     * An object that represents the range of values to match on.
     */
    range?: MatchRange;
    /**
     * The value sent by the client must include the specified characters.
     */
    regex?: HeaderMatch;
    /**
     * The value sent by the client must end with the specified characters.
     */
    suffix?: HeaderMatch;
  }
  export interface DescribeVirtualServiceInput {
    /**
     * The name of the service mesh that the virtual service resides in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The name of the virtual service to describe.
     */
    virtualServiceName: ServiceName;
  }
  export type ListVirtualServicesLimit = number;
  export interface AwsCloudMapInstanceAttribute {
    /**
     * The name of an AWS Cloud Map service instance attribute key. Any AWS Cloud Map service
         instance that contains the specified key and value is returned.
     */
    key: AwsCloudMapInstanceAttributeKey;
    /**
     * The value of an AWS Cloud Map service instance attribute key. Any AWS Cloud Map service
         instance that contains the specified key and value is returned.
     */
    value: AwsCloudMapInstanceAttributeValue;
  }
  export interface VirtualServiceSpec {
    /**
     * The App Mesh object that is acting as the provider for a virtual service. You can specify
         a single virtual node or virtual router.
     */
    provider?: VirtualServiceProvider;
  }
  export interface MatchRange {
    /**
     * The end of the range.
     */
    end: Long;
    /**
     * The start of the range.
     */
    start: Long;
  }
  export type ListVirtualRoutersLimit = number;
  export type HealthCheckIntervalMillis = number;
  export type VirtualRouterList = VirtualRouterRef[];
  export type Arn = string;
  export interface TcpRoute {
    /**
     * The action to take if a match is determined.
     */
    action: TcpRouteAction;
  }
  export type VirtualNodeList = VirtualNodeRef[];
  export interface ListVirtualRoutersInput {
    /**
     * The maximum number of results returned by ListVirtualRouters in paginated
         output. When you use this parameter, ListVirtualRouters returns only
            limit results in a single page along with a nextToken response
         element. You can see the remaining results of the initial request by sending another
            ListVirtualRouters request with the returned nextToken value.
         This value can be between 1 and 100. If you don't use this
         parameter, ListVirtualRouters returns up to 100 results and
         a nextToken value if applicable.
     */
    limit?: ListVirtualRoutersLimit;
    /**
     * The name of the service mesh to list virtual routers in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The nextToken value returned from a previous paginated
            ListVirtualRouters request where limit was used and the
         results exceeded the value of that parameter. Pagination continues from the end of the
         previous results that returned the nextToken value.
     */
    nextToken?: String;
  }
  export type DurationUnit = "ms"|"s"|string;
  export type RoutePriority = number;
  export interface ListVirtualServicesInput {
    /**
     * The maximum number of results returned by ListVirtualServices in paginated
         output. When you use this parameter, ListVirtualServices returns only
            limit results in a single page along with a nextToken response
         element. You can see the remaining results of the initial request by sending another
            ListVirtualServices request with the returned nextToken value.
         This value can be between 1 and 100. If you don't use this
         parameter, ListVirtualServices returns up to 100 results and
         a nextToken value if applicable.
     */
    limit?: ListVirtualServicesLimit;
    /**
     * The name of the service mesh to list virtual services in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The nextToken value returned from a previous paginated
            ListVirtualServices request where limit was used and the
         results exceeded the value of that parameter. Pagination continues from the end of the
         previous results that returned the nextToken value.
     */
    nextToken?: String;
  }
  export interface AccessLog {
    /**
     * The file object to send virtual node access logs to.
     */
    file?: FileAccessLog;
  }
  export interface ListVirtualNodesInput {
    /**
     * The maximum number of results returned by ListVirtualNodes in paginated
         output. When you use this parameter, ListVirtualNodes returns only
            limit results in a single page along with a nextToken response
         element. You can see the remaining results of the initial request by sending another
            ListVirtualNodes request with the returned nextToken value.
         This value can be between 1 and 100. If you don't use this
         parameter, ListVirtualNodes returns up to 100 results and a
            nextToken value if applicable.
     */
    limit?: ListVirtualNodesLimit;
    /**
     * The name of the service mesh to list virtual nodes in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The nextToken value returned from a previous paginated
            ListVirtualNodes request where limit was used and the results
         exceeded the value of that parameter. Pagination continues from the end of the previous
         results that returned the nextToken value.
     */
    nextToken?: String;
  }
  export type ListVirtualNodesLimit = number;
  export type HealthCheckTimeoutMillis = number;
  export type ResourceName = string;
  export type Timestamp = Date;
  export type HeaderMatch = string;
  export type AccountId = string;
  export interface Duration {
    /**
     * A unit of time.
     */
    unit?: DurationUnit;
    /**
     * A number of time units.
     */
    value?: DurationValue;
  }
  export interface DescribeRouteOutput {
    /**
     * The full description of your route.
     */
    route: RouteData;
  }
  export interface HttpRouteMatch {
    /**
     * An object that represents the client request headers to match on.
     */
    headers?: HttpRouteHeaders;
    /**
     * The client request method to match on. Specify only one.
     */
    method?: HttpMethod;
    /**
     * Specifies the path to match requests with. This parameter must always start with
            /, which by itself matches all requests to the virtual service name. You
         can also match for path-based routing of requests. For example, if your virtual service
         name is my-service.local and you want the route to match requests to
            my-service.local/metrics, your prefix should be
         /metrics.
     */
    prefix: String;
    /**
     * The client request scheme to match on. Specify only one.
     */
    scheme?: HttpScheme;
  }
  export interface TagRef {
    /**
     * One part of a key-value pair that make up a tag. A key is a general label
         that acts like a category for more specific tag values.
     */
    key: TagKey;
    /**
     * The optional part of a key-value pair that make up a tag. A value acts as a
         descriptor within a tag category (key).
     */
    value?: TagValue;
  }
  export interface MeshRef {
    /**
     * The full Amazon Resource Name (ARN) of the service mesh.
     */
    arn: Arn;
    createdAt: Timestamp;
    lastUpdatedAt: Timestamp;
    /**
     * The name of the service mesh.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner: AccountId;
    /**
     * The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's
               the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see Working with Shared Meshes.
     */
    resourceOwner: AccountId;
    version: Long;
  }
  export type MeshStatusCode = "ACTIVE"|"DELETED"|"INACTIVE"|string;
  export interface MeshData {
    /**
     * The name of the service mesh.
     */
    meshName: ResourceName;
    /**
     * The associated metadata for the service mesh.
     */
    metadata: ResourceMetadata;
    /**
     * The associated specification for the service mesh.
     */
    spec: MeshSpec;
    /**
     * The status of the service mesh.
     */
    status: MeshStatus;
  }
  export interface VirtualRouterStatus {
    /**
     * The current status of the virtual router.
     */
    status: VirtualRouterStatusCode;
  }
  export interface TcpRouteAction {
    /**
     * An object that represents the targets that traffic is routed to when a request matches the route.
     */
    weightedTargets: WeightedTargets;
  }
  export interface DescribeVirtualNodeInput {
    /**
     * The name of the service mesh that the virtual node resides in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The name of the virtual node to describe.
     */
    virtualNodeName: ResourceName;
  }
  export interface RouteStatus {
    /**
     * The current status for the route.
     */
    status: RouteStatusCode;
  }
  export interface Listener {
    /**
     * The health check information for the listener.
     */
    healthCheck?: HealthCheckPolicy;
    /**
     * The port mapping information for the listener.
     */
    portMapping: PortMapping;
    /**
     * A reference to an object that represents the Transport Layer Security (TLS) properties for a listener.
     */
    tls?: ListenerTls;
  }
  export interface GrpcRoute {
    /**
     * An object that represents the action to take if a match is determined.
     */
    action: GrpcRouteAction;
    /**
     * An object that represents the criteria for determining a request match.
     */
    match: GrpcRouteMatch;
    /**
     * An object that represents a retry policy.
     */
    retryPolicy?: GrpcRetryPolicy;
  }
  export type ListRoutesLimit = number;
  export interface ClientPolicyTls {
    /**
     * Whether the policy is enforced. The default is True, if a value isn't
         specified.
     */
    enforce?: Boolean;
    /**
     * One or more ports that the policy is enforced for.
     */
    ports?: PortSet;
    /**
     * A reference to an object that represents a TLS validation context.
     */
    validation: TlsValidationContext;
  }
  export interface DeleteVirtualServiceOutput {
    /**
     * The virtual service that was deleted.
     */
    virtualService: VirtualServiceData;
  }
  export interface VirtualNodeServiceProvider {
    /**
     * The name of the virtual node that is acting as a service provider.
     */
    virtualNodeName: ResourceName;
  }
  export interface BackendDefaults {
    /**
     * A reference to an object that represents a client policy.
     */
    clientPolicy?: ClientPolicy;
  }
  export interface ListenerTlsFileCertificate {
    /**
     * The certificate chain for the certificate.
     */
    certificateChain: FilePath;
    /**
     * The private key for a certificate stored on the file system of the virtual node that the
         proxy is running on.
     */
    privateKey: FilePath;
  }
  export interface HttpRetryPolicy {
    /**
     * Specify at least one of the following values. 
         
            
               
                  server-error – HTTP status codes 500, 501,
                  502, 503, 504, 505, 506, 507, 508, 510, and 511
            
            
               
                  gateway-error – HTTP status codes 502,
                  503, and 504
            
            
               
                  client-error – HTTP status code 409
            
            
               
                  stream-error – Retry on refused
                  stream
            
         
     */
    httpRetryEvents?: HttpRetryPolicyEvents;
    /**
     * The maximum number of retry attempts.
     */
    maxRetries: MaxRetries;
    /**
     * An object that represents a duration of time.
     */
    perRetryTimeout: Duration;
    /**
     * Specify a valid value.
     */
    tcpRetryEvents?: TcpRetryPolicyEvents;
  }
  export interface DescribeVirtualRouterInput {
    /**
     * The name of the service mesh that the virtual router resides in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The name of the virtual router to describe.
     */
    virtualRouterName: ResourceName;
  }
  export interface TagResourceOutput {
  }
  export type RouteList = RouteRef[];
  export type PortNumber = number;
  export interface TlsValidationContextFileTrust {
    /**
     * The certificate trust chain for a certificate stored on the file system of the virtual
         node that the proxy is running on.
     */
    certificateChain: FilePath;
  }
  export interface GrpcRouteMetadata {
    /**
     * Specify True to match anything except the match criteria. The default value is False.
     */
    invert?: Boolean;
    /**
     * An object that represents the data to match from the request.
     */
    match?: GrpcRouteMetadataMatchMethod;
    /**
     * The name of the route.
     */
    name: HeaderName;
  }
  export interface CreateRouteInput {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: String;
    /**
     * The name of the service mesh to create the route in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
               the account that you specify must share the mesh with your account before you can create 
             the resource in the service mesh. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The name to use for the route.
     */
    routeName: ResourceName;
    /**
     * The route specification to apply.
     */
    spec: RouteSpec;
    /**
     * Optional metadata that you can apply to the route to assist with categorization and
         organization. Each tag consists of a key and an optional value, both of which you define.
         Tag keys can have a maximum character length of 128 characters, and tag values can have
            a maximum length of 256 characters.
     */
    tags?: TagList;
    /**
     * The name of the virtual router in which to create the route. If the virtual router is in
         a shared mesh, then you must be the owner of the virtual router resource.
     */
    virtualRouterName: ResourceName;
  }
  export type WeightedTargets = WeightedTarget[];
  export type HttpRouteHeaders = HttpRouteHeader[];
  export type String = string;
  export type HttpScheme = "http"|"https"|string;
  export interface UpdateRouteInput {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: String;
    /**
     * The name of the service mesh that the route resides in.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
    /**
     * The name of the route to update.
     */
    routeName: ResourceName;
    /**
     * The new route specification to apply. This overwrites the existing data.
     */
    spec: RouteSpec;
    /**
     * The name of the virtual router that the route is associated with.
     */
    virtualRouterName: ResourceName;
  }
  export interface HttpRoute {
    /**
     * An object that represents the action to take if a match is determined.
     */
    action: HttpRouteAction;
    /**
     * An object that represents the criteria for determining a request match.
     */
    match: HttpRouteMatch;
    /**
     * An object that represents a retry policy.
     */
    retryPolicy?: HttpRetryPolicy;
  }
  export interface DescribeMeshInput {
    /**
     * The name of the service mesh to describe.
     */
    meshName: ResourceName;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
               the ID of the account that shared the mesh with your account. For more information about mesh sharing, see Working with Shared Meshes.
     */
    meshOwner?: AccountId;
  }
  export interface MeshSpec {
    /**
     * The egress filter rules for the service mesh.
     */
    egressFilter?: EgressFilter;
  }
  export interface ListTagsForResourceOutput {
    /**
     * The nextToken value to include in a future ListTagsForResource
         request. When the results of a ListTagsForResource request exceed
            limit, you can use this value to retrieve the next page of results. This
         value is null when there are no more results to return.
     */
    nextToken?: String;
    /**
     * The tags for the resource.
     */
    tags: TagList;
  }
  export interface ServiceDiscovery {
    /**
     * Specifies any AWS Cloud Map information for the virtual node.
     */
    awsCloudMap?: AwsCloudMapServiceDiscovery;
    /**
     * Specifies the DNS information for the virtual node.
     */
    dns?: DnsServiceDiscovery;
  }
  export interface ListVirtualNodesOutput {
    /**
     * The nextToken value to include in a future ListVirtualNodes
         request. When the results of a ListVirtualNodes request exceed
            limit, you can use this value to retrieve the next page of results. This
         value is null when there are no more results to return.
     */
    nextToken?: String;
    /**
     * The list of existing virtual nodes for the specified service mesh.
     */
    virtualNodes: VirtualNodeList;
  }
  export interface UntagResourceInput {
    /**
     * The Amazon Resource Name (ARN) of the resource to delete tags from.
     */
    resourceArn: Arn;
    /**
     * The keys of the tags to be removed.
     */
    tagKeys: TagKeyList;
  }
  export interface ListenerTlsAcmCertificate {
    /**
     * The Amazon Resource Name (ARN) for the certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see Transport Layer Security (TLS).
     */
    certificateArn: Arn;
  }
  export type TagKey = string;
  export type VirtualServiceStatusCode = "ACTIVE"|"DELETED"|"INACTIVE"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-10-01"|"2018-10-01"|"2019-01-25"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the AppMesh client.
   */
  export import Types = AppMesh;
}
export = AppMesh;
